using System.Collections.Generic;
using System.Threading.Tasks;
using ISE.Bff.Compras.Models;
using ISE.Core.Communication;

namespace ISE.Bff.Compras.Services.Interfaces
{
    public interface IPedidoService
    {
        Task<ResponseResult> FinalizarPedido(PedidoDto pedido);
        Task<PedidoDto> ObterUltimoPedido();
        Task<IEnumerable<PedidoDto>> ObterListaPorClienteId();
        Task<VoucherDto> ObterVoucherPorCodigo(string codigo);

    }
}