using System;
using System.Threading.Tasks;
using ISE.Bff.Compras.Models;
using ISE.Core.Communication;

namespace ISE.Bff.Compras.Services.Interfaces
{
    public interface ICarrinhoService
    {
        Task<CarrinhoDto> ObterCarrinho();
        Task<ResponseResult> AdicionarItemCarrinho(ItemCarrinhoDto produto);
        Task<ResponseResult> AtualizarItemCarrinho(Guid produtoId, ItemCarrinhoDto carrinho);
        Task<ResponseResult> RemoverItemCarrinho(Guid produtoId);
        Task<ResponseResult> AplicarVoucherCarrinho(VoucherDto voucher);
    }
}