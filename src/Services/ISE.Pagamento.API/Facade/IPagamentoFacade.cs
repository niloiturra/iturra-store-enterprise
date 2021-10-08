using System.Threading.Tasks;
using ISE.Pagamento.API.Models;

namespace ISE.Pagamento.API.Facade
{
    public interface IPagamentoFacade
    {
        Task<Transacao> AutorizarPagamento(Models.Pagamento pagamento);
        Task<Transacao> CapturarPagamento(Transacao transacao);
        Task<Transacao> CancelarAutorizacao(Transacao transacao);
    }
}