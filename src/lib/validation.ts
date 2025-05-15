import type { Account, Transaction } from "@/types";

/**
 * Validates if an amount is a valid non-zero positive number
 */
export const isValidAmount = (amount: string | number | undefined): boolean => {
    if (amount === undefined || amount === '') return false;
    const parsedAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    return !isNaN(parsedAmount) && parsedAmount > 0;
};

/**
 * Validates if all required transaction fields are filled and valid
 */
export const isValidTransaction = (
    transactionDate: Date | undefined,
    transactionDesc: string | undefined,
    transactionSlip: string | undefined,
    transactionAmount: string | number | undefined,
    linkedAccountId: string | undefined
): boolean => {
    return !!(
        transactionDate &&
        transactionDesc?.trim() &&
        transactionSlip?.trim() &&
        isValidAmount(transactionAmount) &&
        linkedAccountId
    );
};

/**
 * Checks if an edited transaction has any actual changes from its original state
 */
export const isTransactionUnchanged = (
    editTarget: Transaction | null,
    transactionDate: Date | undefined,
    transactionDesc: string | undefined,
    transactionSlip: string | undefined,
    transactionAmount: string | number | undefined,
    transactionType: "debit" | "credit",
    linkedAccountId: string | undefined,
    allAccounts: Account[]
): boolean => {
    if (!editTarget || !transactionDate || !transactionDesc || !transactionSlip || !transactionAmount || !linkedAccountId) return false;

    const parsedAmount = parseFloat(transactionAmount.toString());
    const originalAmount = editTarget.debit ?? editTarget.credit ?? 0;
    const linkedAccount = allAccounts.find(a => a.id === linkedAccountId);

    return (
        transactionDate.toISOString().split('T')[0] === editTarget.date &&
        transactionDesc.trim() === editTarget.description &&
        transactionSlip.trim() === editTarget.slipNumber &&
        parsedAmount === originalAmount &&
        transactionType === (editTarget.debit ? "debit" : "credit") &&
        linkedAccount?.name === editTarget.code
    );
};
