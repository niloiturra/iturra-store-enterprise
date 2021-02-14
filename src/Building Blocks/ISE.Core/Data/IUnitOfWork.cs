using System.Threading.Tasks;

namespace ISE.Core.Data
{
    public interface IUnitOfWork
    {
        Task<bool> Commit();
    }
}