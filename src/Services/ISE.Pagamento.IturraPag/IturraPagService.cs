namespace ISE.Pagamento.IturraPag
{
    public class IturraPagService
    {
        public readonly string ApiKey;
        public readonly string EncryptionKey;

        public IturraPagService(string apiKey, string encryptionKey)
        {
            ApiKey = apiKey;
            EncryptionKey = encryptionKey;
        }
    }
}