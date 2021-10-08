using ISE.Pagamento.API.Data;
using ISE.Pagamento.API.Data.Repository;
using ISE.Pagamento.API.Facade;
using ISE.Pagamento.API.Models;
using ISE.Pagamento.API.Services;
using ISE.WebApi.Core.Usuario;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace ISE.Pagamento.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IAspNetUser, AspNetUser>();

            services.AddScoped<IPagamentoService, PagamentoService>();
            services.AddScoped<IPagamentoFacade, PagamentoCartaoCreditoFacade>();

            services.AddScoped<IPagamentoRepository, PagamentoRepository>();
            services.AddScoped<PagamentosContext>();
        }
    }
}