using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using ISE.Core.Messages;
using ValidationResult = FluentValidation.Results.ValidationResult;

namespace ISE.Core.Mediator
{
    public interface IMediatorHandler
    {
        Task PublicarEvento<T>(T evento) where T : Event;
        Task<ValidationResult> EnviarComando<T>(T comando) where T : Command;
    }
}