using System;
using ISE.Core.DomainObjects;

namespace ISE.Core.Data
{
    public interface IRepository<T> : IDisposable where T : IAggregateRoot
    {
    }
}