using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ISE.Bff.Compras.Models;

namespace ISE.Bff.Compras.Services.Interfaces
{
    public interface ICatalogoService
    {
        Task<ItemProdutoDto> ObterPorId(Guid id);
        Task<IEnumerable<ItemProdutoDto>> ObterItens(IEnumerable<Guid> ids);
    }
}