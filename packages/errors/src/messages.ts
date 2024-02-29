import {
    SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED,
    SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_ALREADY_INITIALIZED,
    SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_BORROW_FAILED,
    SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_BORROW_OUTSTANDING,
    SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_DATA_SIZE_CHANGED,
    SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_DATA_TOO_SMALL,
    SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_NOT_EXECUTABLE,
    SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_NOT_RENT_EXEMPT,
    SOLANA_ERROR__INSTRUCTION_ERROR_ARITHMETIC_OVERFLOW,
    SOLANA_ERROR__INSTRUCTION_ERROR_BORSH_IO_ERROR,
    SOLANA_ERROR__INSTRUCTION_ERROR_BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS,
    SOLANA_ERROR__INSTRUCTION_ERROR_CALL_DEPTH,
    SOLANA_ERROR__INSTRUCTION_ERROR_COMPUTATIONAL_BUDGET_EXCEEDED,
    SOLANA_ERROR__INSTRUCTION_ERROR_CUSTOM,
    SOLANA_ERROR__INSTRUCTION_ERROR_DUPLICATE_ACCOUNT_INDEX,
    SOLANA_ERROR__INSTRUCTION_ERROR_DUPLICATE_ACCOUNT_OUT_OF_SYNC,
    SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT,
    SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_DATA_MODIFIED,
    SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_LAMPORT_CHANGE,
    SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_MODIFIED,
    SOLANA_ERROR__INSTRUCTION_ERROR_EXTERNAL_ACCOUNT_DATA_MODIFIED,
    SOLANA_ERROR__INSTRUCTION_ERROR_EXTERNAL_ACCOUNT_LAMPORT_SPEND,
    SOLANA_ERROR__INSTRUCTION_ERROR_GENERIC_ERROR,
    SOLANA_ERROR__INSTRUCTION_ERROR_ILLEGAL_OWNER,
    SOLANA_ERROR__INSTRUCTION_ERROR_IMMUTABLE,
    SOLANA_ERROR__INSTRUCTION_ERROR_INCORRECT_AUTHORITY,
    SOLANA_ERROR__INSTRUCTION_ERROR_INCORRECT_PROGRAM_ID,
    SOLANA_ERROR__INSTRUCTION_ERROR_INSUFFICIENT_FUNDS,
    SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ACCOUNT_DATA,
    SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ACCOUNT_OWNER,
    SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ARGUMENT,
    SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ERROR,
    SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_INSTRUCTION_DATA,
    SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_REALLOC,
    SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_SEEDS,
    SOLANA_ERROR__INSTRUCTION_ERROR_MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED,
    SOLANA_ERROR__INSTRUCTION_ERROR_MAX_ACCOUNTS_EXCEEDED,
    SOLANA_ERROR__INSTRUCTION_ERROR_MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED,
    SOLANA_ERROR__INSTRUCTION_ERROR_MAX_SEED_LENGTH_EXCEEDED,
    SOLANA_ERROR__INSTRUCTION_ERROR_MISSING_ACCOUNT,
    SOLANA_ERROR__INSTRUCTION_ERROR_MISSING_REQUIRED_SIGNATURE,
    SOLANA_ERROR__INSTRUCTION_ERROR_MODIFIED_PROGRAM_ID,
    SOLANA_ERROR__INSTRUCTION_ERROR_NOT_ENOUGH_ACCOUNT_KEYS,
    SOLANA_ERROR__INSTRUCTION_ERROR_PRIVILEGE_ESCALATION,
    SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_ENVIRONMENT_SETUP_FAILURE,
    SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_FAILED_TO_COMPILE,
    SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_FAILED_TO_COMPLETE,
    SOLANA_ERROR__INSTRUCTION_ERROR_READONLY_DATA_MODIFIED,
    SOLANA_ERROR__INSTRUCTION_ERROR_READONLY_LAMPORT_CHANGE,
    SOLANA_ERROR__INSTRUCTION_ERROR_REENTRANCY_NOT_ALLOWED,
    SOLANA_ERROR__INSTRUCTION_ERROR_RENT_EPOCH_MODIFIED,
    SOLANA_ERROR__INSTRUCTION_ERROR_UNBALANCED_INSTRUCTION,
    SOLANA_ERROR__INSTRUCTION_ERROR_UNINITIALIZED_ACCOUNT,
    SOLANA_ERROR__INSTRUCTION_ERROR_UNKNOWN,
    SOLANA_ERROR__INSTRUCTION_ERROR_UNSUPPORTED_PROGRAM_ID,
    SOLANA_ERROR__INSTRUCTION_ERROR_UNSUPPORTED_SYSVAR,
    SOLANA_ERROR__INVALID_KEYPAIR_BYTES,
    SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND,
    SOLANA_ERROR__NONCE_INVALID,
    SOLANA_ERROR__RPC_INTEGER_OVERFLOW,
    SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_BORROW_OUTSTANDING,
    SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_IN_USE,
    SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_LOADED_TWICE,
    SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_NOT_FOUND,
    SOLANA_ERROR__TRANSACTION_ERROR_ADDRESS_LOOKUP_TABLE_NOT_FOUND,
    SOLANA_ERROR__TRANSACTION_ERROR_ALREADY_PROCESSED,
    SOLANA_ERROR__TRANSACTION_ERROR_BLOCKHASH_NOT_FOUND,
    SOLANA_ERROR__TRANSACTION_ERROR_CALL_CHAIN_TOO_DEEP,
    SOLANA_ERROR__TRANSACTION_ERROR_CLUSTER_MAINTENANCE,
    SOLANA_ERROR__TRANSACTION_ERROR_DUPLICATE_INSTRUCTION,
    SOLANA_ERROR__TRANSACTION_ERROR_INSUFFICIENT_FUNDS_FOR_FEE,
    SOLANA_ERROR__TRANSACTION_ERROR_INSUFFICIENT_FUNDS_FOR_RENT,
    SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ACCOUNT_FOR_FEE,
    SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ACCOUNT_INDEX,
    SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_DATA,
    SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_INDEX,
    SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_OWNER,
    SOLANA_ERROR__TRANSACTION_ERROR_INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT,
    SOLANA_ERROR__TRANSACTION_ERROR_INVALID_PROGRAM_FOR_EXECUTION,
    SOLANA_ERROR__TRANSACTION_ERROR_INVALID_RENT_PAYING_ACCOUNT,
    SOLANA_ERROR__TRANSACTION_ERROR_INVALID_WRITABLE_ACCOUNT,
    SOLANA_ERROR__TRANSACTION_ERROR_MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED,
    SOLANA_ERROR__TRANSACTION_ERROR_MISSING_SIGNATURE_FOR_FEE,
    SOLANA_ERROR__TRANSACTION_ERROR_PROGRAM_ACCOUNT_NOT_FOUND,
    SOLANA_ERROR__TRANSACTION_ERROR_PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED,
    SOLANA_ERROR__TRANSACTION_ERROR_RESANITIZATION_NEEDED,
    SOLANA_ERROR__TRANSACTION_ERROR_SANITIZE_FAILURE,
    SOLANA_ERROR__TRANSACTION_ERROR_SIGNATURE_FAILURE,
    SOLANA_ERROR__TRANSACTION_ERROR_TOO_MANY_ACCOUNT_LOCKS,
    SOLANA_ERROR__TRANSACTION_ERROR_UNBALANCED_TRANSACTION,
    SOLANA_ERROR__TRANSACTION_ERROR_UNKNOWN,
    SOLANA_ERROR__TRANSACTION_ERROR_UNSUPPORTED_VERSION,
    SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT,
    SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT,
    SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT,
    SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_BLOCK_COST_LIMIT,
    SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_VOTE_COST_LIMIT,
    SOLANA_ERROR__TRANSACTION_MISSING_SIGNATURES,
    SOLANA_ERROR__TRANSACTION_SIGNATURE_NOT_COMPUTABLE,
    SolanaErrorCode,
} from './codes';

/**
 * To add a new error, follow the instructions at
 * https://github.com/solana-labs/solana-web3.js/tree/master/packages/errors#adding-a-new-error
 *
 * WARNING:
 *   - Don't change the meaning of an error message.
 */
export const SolanaErrorMessages: Readonly<{
    // This type makes this data structure exhaustive with respect to `SolanaErrorCode`.
    // TypeScript will fail to build this project if add an error code without a message.
    [P in SolanaErrorCode]: string;
}> = {
    [SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED]:
        'The network has progressed past the last block for which this transaction could have been committed.',
    [SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_ALREADY_INITIALIZED]: 'instruction requires an uninitialized account',
    [SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_BORROW_FAILED]:
        'instruction tries to borrow reference for an account which is already borrowed',
    [SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_BORROW_OUTSTANDING]:
        'instruction left account with an outstanding borrowed reference',
    [SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_DATA_SIZE_CHANGED]:
        "program other than the account's owner changed the size of the account data",
    [SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_DATA_TOO_SMALL]: 'account data too small for instruction',
    [SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_NOT_EXECUTABLE]: 'instruction expected an executable account',
    [SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_NOT_RENT_EXEMPT]:
        'An account does not have enough lamports to be rent-exempt',
    [SOLANA_ERROR__INSTRUCTION_ERROR_ARITHMETIC_OVERFLOW]: 'Program arithmetic overflowed',
    [SOLANA_ERROR__INSTRUCTION_ERROR_BORSH_IO_ERROR]: 'Failed to serialize or deserialize account data: $encodedData',
    [SOLANA_ERROR__INSTRUCTION_ERROR_BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS]:
        'Builtin programs must consume compute units',
    [SOLANA_ERROR__INSTRUCTION_ERROR_CALL_DEPTH]: 'Cross-program invocation call depth too deep',
    [SOLANA_ERROR__INSTRUCTION_ERROR_COMPUTATIONAL_BUDGET_EXCEEDED]: 'Computational budget exceeded',
    [SOLANA_ERROR__INSTRUCTION_ERROR_CUSTOM]: 'custom program error: #$code',
    [SOLANA_ERROR__INSTRUCTION_ERROR_DUPLICATE_ACCOUNT_INDEX]: 'instruction contains duplicate accounts',
    [SOLANA_ERROR__INSTRUCTION_ERROR_DUPLICATE_ACCOUNT_OUT_OF_SYNC]:
        'instruction modifications of multiply-passed account differ',
    [SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT]: 'executable accounts must be rent exempt',
    [SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_DATA_MODIFIED]: 'instruction changed executable accounts data',
    [SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_LAMPORT_CHANGE]:
        'instruction changed the balance of an executable account',
    [SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_MODIFIED]: 'instruction changed executable bit of an account',
    [SOLANA_ERROR__INSTRUCTION_ERROR_EXTERNAL_ACCOUNT_DATA_MODIFIED]:
        'instruction modified data of an account it does not own',
    [SOLANA_ERROR__INSTRUCTION_ERROR_EXTERNAL_ACCOUNT_LAMPORT_SPEND]:
        'instruction spent from the balance of an account it does not own',
    [SOLANA_ERROR__INSTRUCTION_ERROR_GENERIC_ERROR]: 'generic instruction error',
    [SOLANA_ERROR__INSTRUCTION_ERROR_ILLEGAL_OWNER]: 'Provided owner is not allowed',
    [SOLANA_ERROR__INSTRUCTION_ERROR_IMMUTABLE]: 'Account is immutable',
    [SOLANA_ERROR__INSTRUCTION_ERROR_INCORRECT_AUTHORITY]: 'Incorrect authority provided',
    [SOLANA_ERROR__INSTRUCTION_ERROR_INCORRECT_PROGRAM_ID]: 'incorrect program id for instruction',
    [SOLANA_ERROR__INSTRUCTION_ERROR_INSUFFICIENT_FUNDS]: 'insufficient funds for instruction',
    [SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ACCOUNT_DATA]: 'invalid account data for instruction',
    [SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ACCOUNT_OWNER]: 'Invalid account owner',
    [SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ARGUMENT]: 'invalid program argument',
    [SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ERROR]: 'program returned invalid error code',
    [SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_INSTRUCTION_DATA]: 'invalid instruction data',
    [SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_REALLOC]: 'Failed to reallocate account data',
    [SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_SEEDS]: 'Provided seeds do not result in a valid address',
    [SOLANA_ERROR__INSTRUCTION_ERROR_MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED]:
        'Accounts data allocations exceeded the maximum allowed per transaction',
    [SOLANA_ERROR__INSTRUCTION_ERROR_MAX_ACCOUNTS_EXCEEDED]: 'Max accounts exceeded',
    [SOLANA_ERROR__INSTRUCTION_ERROR_MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED]: 'Max instruction trace length exceeded',
    [SOLANA_ERROR__INSTRUCTION_ERROR_MAX_SEED_LENGTH_EXCEEDED]: 'Length of the seed is too long for address generation',
    [SOLANA_ERROR__INSTRUCTION_ERROR_MISSING_ACCOUNT]: 'An account required by the instruction is missing',
    [SOLANA_ERROR__INSTRUCTION_ERROR_MISSING_REQUIRED_SIGNATURE]: 'missing required signature for instruction',
    [SOLANA_ERROR__INSTRUCTION_ERROR_MODIFIED_PROGRAM_ID]:
        'instruction illegally modified the program id of an account',
    [SOLANA_ERROR__INSTRUCTION_ERROR_NOT_ENOUGH_ACCOUNT_KEYS]: 'insufficient account keys for instruction',
    [SOLANA_ERROR__INSTRUCTION_ERROR_PRIVILEGE_ESCALATION]:
        'Cross-program invocation with unauthorized signer or writable account',
    [SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_ENVIRONMENT_SETUP_FAILURE]:
        'Failed to create program execution environment',
    [SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_FAILED_TO_COMPILE]: 'Program failed to compile',
    [SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_FAILED_TO_COMPLETE]: 'Program failed to complete',
    [SOLANA_ERROR__INSTRUCTION_ERROR_READONLY_DATA_MODIFIED]: 'instruction modified data of a read-only account',
    [SOLANA_ERROR__INSTRUCTION_ERROR_READONLY_LAMPORT_CHANGE]: 'instruction changed the balance of a read-only account',
    [SOLANA_ERROR__INSTRUCTION_ERROR_REENTRANCY_NOT_ALLOWED]:
        'Cross-program invocation reentrancy not allowed for this instruction',
    [SOLANA_ERROR__INSTRUCTION_ERROR_RENT_EPOCH_MODIFIED]: 'instruction modified rent epoch of an account',
    [SOLANA_ERROR__INSTRUCTION_ERROR_UNBALANCED_INSTRUCTION]:
        'sum of account balances before and after instruction do not match',
    [SOLANA_ERROR__INSTRUCTION_ERROR_UNINITIALIZED_ACCOUNT]: 'instruction requires an initialized account',
    [SOLANA_ERROR__INSTRUCTION_ERROR_UNKNOWN]: '',
    [SOLANA_ERROR__INSTRUCTION_ERROR_UNSUPPORTED_PROGRAM_ID]: 'Unsupported program id',
    [SOLANA_ERROR__INSTRUCTION_ERROR_UNSUPPORTED_SYSVAR]: 'Unsupported sysvar',
    [SOLANA_ERROR__INVALID_KEYPAIR_BYTES]: 'Key pair bytes must be of length 64, got $byteLength.',
    [SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND]: 'No nonce account could be found at address `$nonceAccountAddress`',
    [SOLANA_ERROR__NONCE_INVALID]:
        'The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`',
    [SOLANA_ERROR__RPC_INTEGER_OVERFLOW]:
        'The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was ' +
        '`$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds ' +
        '`Number.MAX_SAFE_INTEGER`.',
    [SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_BORROW_OUTSTANDING]:
        'Transaction processing left an account with an outstanding borrowed reference',
    [SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_IN_USE]: 'Account in use',
    [SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_LOADED_TWICE]: 'Account loaded twice',
    [SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_NOT_FOUND]:
        'Attempt to debit an account but found no record of a prior credit.',
    [SOLANA_ERROR__TRANSACTION_ERROR_ADDRESS_LOOKUP_TABLE_NOT_FOUND]:
        "Transaction loads an address table account that doesn't exist",
    [SOLANA_ERROR__TRANSACTION_ERROR_ALREADY_PROCESSED]: 'This transaction has already been processed',
    [SOLANA_ERROR__TRANSACTION_ERROR_BLOCKHASH_NOT_FOUND]: 'Blockhash not found',
    [SOLANA_ERROR__TRANSACTION_ERROR_CALL_CHAIN_TOO_DEEP]: 'Loader call chain is too deep',
    [SOLANA_ERROR__TRANSACTION_ERROR_CLUSTER_MAINTENANCE]:
        'Transactions are currently disabled due to cluster maintenance',
    [SOLANA_ERROR__TRANSACTION_ERROR_DUPLICATE_INSTRUCTION]:
        'Transaction contains a duplicate instruction ($index) that is not allowed',
    [SOLANA_ERROR__TRANSACTION_ERROR_INSUFFICIENT_FUNDS_FOR_FEE]: 'Insufficient funds for fee',
    [SOLANA_ERROR__TRANSACTION_ERROR_INSUFFICIENT_FUNDS_FOR_RENT]:
        'Transaction results in an account ($accountIndex) with insufficient funds for rent',
    [SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ACCOUNT_FOR_FEE]: 'This account may not be used to pay transaction fees',
    [SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ACCOUNT_INDEX]: 'Transaction contains an invalid account reference',
    [SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_DATA]:
        'Transaction loads an address table account with invalid data',
    [SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_INDEX]:
        'Transaction address table lookup uses an invalid index',
    [SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_OWNER]:
        'Transaction loads an address table account with an invalid owner',
    [SOLANA_ERROR__TRANSACTION_ERROR_INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT]:
        'LoadedAccountsDataSizeLimit set for transaction must be greater than 0.',
    [SOLANA_ERROR__TRANSACTION_ERROR_INVALID_PROGRAM_FOR_EXECUTION]:
        'This program may not be used for executing instructions',
    [SOLANA_ERROR__TRANSACTION_ERROR_INVALID_RENT_PAYING_ACCOUNT]:
        'Transaction leaves an account with a lower balance than rent-exempt minimum',
    [SOLANA_ERROR__TRANSACTION_ERROR_INVALID_WRITABLE_ACCOUNT]:
        'Transaction loads a writable account that cannot be written',
    [SOLANA_ERROR__TRANSACTION_ERROR_MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED]:
        'Transaction exceeded max loaded accounts data size cap',
    [SOLANA_ERROR__TRANSACTION_ERROR_MISSING_SIGNATURE_FOR_FEE]:
        'Transaction requires a fee but has no signature present',
    [SOLANA_ERROR__TRANSACTION_ERROR_PROGRAM_ACCOUNT_NOT_FOUND]: 'Attempt to load a program that does not exist',
    [SOLANA_ERROR__TRANSACTION_ERROR_PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED]:
        'Execution of the program referenced by account at index $accountIndex is temporarily restricted.',
    [SOLANA_ERROR__TRANSACTION_ERROR_RESANITIZATION_NEEDED]: 'ResanitizationNeeded',
    [SOLANA_ERROR__TRANSACTION_ERROR_SANITIZE_FAILURE]: 'Transaction failed to sanitize accounts offsets correctly',
    [SOLANA_ERROR__TRANSACTION_ERROR_SIGNATURE_FAILURE]: 'Transaction did not pass signature verification',
    [SOLANA_ERROR__TRANSACTION_ERROR_TOO_MANY_ACCOUNT_LOCKS]: 'Transaction locked too many accounts',
    [SOLANA_ERROR__TRANSACTION_ERROR_UNBALANCED_TRANSACTION]:
        'Sum of account balances before and after transaction do not match',
    [SOLANA_ERROR__TRANSACTION_ERROR_UNKNOWN]: 'The transaction failed with the error `$errorName`',
    [SOLANA_ERROR__TRANSACTION_ERROR_UNSUPPORTED_VERSION]: 'Transaction version is unsupported',
    [SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT]:
        'Transaction would exceed account data limit within the block',
    [SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT]:
        'Transaction would exceed total account data limit',
    [SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT]:
        'Transaction would exceed max account limit within the block',
    [SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_BLOCK_COST_LIMIT]:
        'Transaction would exceed max Block Cost Limit',
    [SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_VOTE_COST_LIMIT]: 'Transaction would exceed max Vote Cost Limit',
    [SOLANA_ERROR__TRANSACTION_MISSING_SIGNATURES]: 'Transaction is missing signatures for addresses: $addresses.',
    [SOLANA_ERROR__TRANSACTION_SIGNATURE_NOT_COMPUTABLE]:
        "Could not determine this transaction's signature. Make sure that the transaction has " +
        'been signed by its fee payer.',
};
