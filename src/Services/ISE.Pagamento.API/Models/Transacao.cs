using System;
using ISE.Core.DomainObjects;

namespace ISE.Pagamento.API.Models
{
    public class Transacao : Entity
    {
        public string CodigoAutorizacao { get; set; }
        public string BandeiraCartao { get; set; }
        public DateTime? DataTransacao { get; set; }
        public decimal ValorTotal { get; set; }
        public decimal CustoTransacao { get; set; }
        public StatusTransacao Status { get; set; }
        public string TID { get; set; }
        public string NSU { get; set; }

        public Guid PagamentoId { get; set; }

        public Pagamento Pagamento { get; set; }
    }
}