using Microsoft.Extensions.DependencyInjection;
using ISE.Catalogo.API.Data;
using ISE.Catalogo.API.Data.Repository;
using ISE.Catalogo.API.Models;

namespace ISE.Catalogo.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IProdutoRepository, ProdutoRepository>();
            services.AddScoped<CatalogoContext>();
        }
    }
}