import {
    SolanaSignAndSendTransaction,
    SolanaSignTransaction,
    SolanaSignTransactionFeature,
    SolanaSignTransactionInput,
    SolanaSignTransactionOutput,
} from '@solana/wallet-standard-features';
import {
    WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_CHAIN_UNSUPPORTED,
    WalletStandardError,
} from '@wallet-standard/errors';
import { getWalletAccountFeature, UiWalletAccount } from '@wallet-standard/ui';
import { getWalletAccountForUiWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from '@wallet-standard/ui-registry';
import { useCallback } from 'react';

import { OnlySolanaChains } from './chain';

type Input = Readonly<
    Omit<SolanaSignTransactionInput, 'account' | 'chain' | 'options'> & {
        options?: Readonly<{
            minContextSlot?: bigint;
        }>;
    }
>;
type Output = SolanaSignTransactionOutput;

/**
 * Returns a function you can call to sign a serialized transaction.
 */
export function useSignTransaction<TWalletAccount extends UiWalletAccount>(
    ...config: Parameters<typeof useSignTransactions<TWalletAccount>>
): (input: Input) => Promise<Output> {
    const signTransactions = useSignTransactions(...config);
    return useCallback(
        async input => {
            const [result] = await signTransactions(input);
            return result;
        },
        [signTransactions],
    );
}

/**
 * The plural version of `useSignTransaction`. Call this function with more than one input to sign
 * multiple transactions in one operation.
 *
 * See `useSignTransaction()` for usage.
 */
export function useSignTransactions<TWalletAccount extends UiWalletAccount>(
    uiWalletAccount: TWalletAccount,
    chain: OnlySolanaChains<TWalletAccount['chains']>,
): (...inputs: readonly Input[]) => Promise<readonly Output[]> {
    if (!uiWalletAccount.chains.includes(chain)) {
        throw new WalletStandardError(WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_CHAIN_UNSUPPORTED, {
            address: uiWalletAccount.address,
            chain,
            featureName: SolanaSignAndSendTransaction,
            supportedChains: [...uiWalletAccount.chains],
            supportedFeatures: [...uiWalletAccount.features],
        });
    }
    const signTransactionFeature = getWalletAccountFeature(
        uiWalletAccount,
        SolanaSignTransaction,
    ) as SolanaSignTransactionFeature[typeof SolanaSignTransaction];
    const account = getWalletAccountForUiWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(uiWalletAccount);
    return useCallback(
        async (...inputs) => {
            const inputsWithAccountAndChain = inputs.map(({ options, ...rest }) => {
                const minContextSlot = options?.minContextSlot;
                return {
                    ...rest,
                    account,
                    chain,
                    ...(minContextSlot != null
                        ? {
                              options: {
                                  minContextSlot: Number(minContextSlot),
                              },
                          }
                        : null),
                };
            });
            const results = await signTransactionFeature.signTransaction(...inputsWithAccountAndChain);
            return results;
        },
        [signTransactionFeature, account, chain],
    );
}
