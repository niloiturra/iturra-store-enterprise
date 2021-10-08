using System;
using System.Threading.Tasks;
using ISE.Core.Messages.Integration;

namespace ISE.Pagamento.API.Services
{
    public interface IPagamentoService
    {
        Task<ResponseMessage> AutorizarPagamento(Models.Pagamento pagamento);
        Task<ResponseMessage> CapturarPagamento(Guid pedidoId);
        Task<ResponseMessage> CancelarPagamento(Guid pedidoId);
    }
}