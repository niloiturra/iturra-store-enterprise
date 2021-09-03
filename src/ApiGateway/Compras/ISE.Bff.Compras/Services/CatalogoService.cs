using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using ISE.Bff.Compras.Extensions;
using ISE.Bff.Compras.Models;
using ISE.Bff.Compras.Services.Interfaces;
using Microsoft.Extensions.Options;

namespace ISE.Bff.Compras.Services
{
    public class CatalogoService : Service, ICatalogoService
    {
        private readonly HttpClient _httpClient;

        public CatalogoService(HttpClient httpClient, IOptions<AppServicesSettings> settings)
        {
            _httpClient = httpClient;
            _httpClient.BaseAddress = new Uri(settings.Value.CatalogoUrl);
        }

        public async Task<ItemProdutoDto> ObterPorId(Guid id)
        {
            var response = await _httpClient.GetAsync($"/catalogo/produtos/{id}");

            TratarErrosResponse(response);

            return await DeserializarObjetoResponse<ItemProdutoDto>(response);
        }

        public async Task<IEnumerable<ItemProdutoDto>> ObterItens(IEnumerable<Guid> ids)
        {
            var idsRequest = string.Join(",", ids);

            var response = await _httpClient.GetAsync($"/catalogo/produtos/lista/{idsRequest}/");

            TratarErrosResponse(response);

            return await DeserializarObjetoResponse<IEnumerable<ItemProdutoDto>>(response);
        }
    }
}