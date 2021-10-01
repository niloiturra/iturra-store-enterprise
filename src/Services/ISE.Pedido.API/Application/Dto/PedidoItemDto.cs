using System;
using ISE.Pedido.Domain;

namespace ISE.Pedido.API.Application.Dto
{
    public class PedidoItemDto
    {
        public Guid PedidoId { get; set; }
        public Guid ProdutoId { get; set; }
        public string Nome { get; set; }
        public decimal Valor { get; set; }
        public string Imagem { get; set; }
        public int Quantidade { get; set; }

        public static PedidoItem ParaPedidoItem(PedidoItemDto pedidoItemDTO)
        {
            return new PedidoItem(pedidoItemDTO.ProdutoId, pedidoItemDTO.Nome, pedidoItemDTO.Quantidade,
                pedidoItemDTO.Valor, pedidoItemDTO.Imagem);
        }
    }
}