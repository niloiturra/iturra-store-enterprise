namespace ISE.Pagamento.IturraPag
{
    public enum TransactionStatus
    {
        Authorized = 1,
        Paid,
        Refused,
        Chargedback,
        Cancelled
    }
}