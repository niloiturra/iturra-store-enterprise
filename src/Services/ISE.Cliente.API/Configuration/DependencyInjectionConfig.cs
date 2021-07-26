using ISE.Cliente.API.Data;
using ISE.Core.Mediator;
using Microsoft.Extensions.DependencyInjection;

namespace ISE.Cliente.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IMediatorHandler, MediatorHandler>();
            services.AddScoped<ClientesContext>();
        }
    }
}