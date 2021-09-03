using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ISE.Bff.Compras.Configuration
{
    public static class MessageBusConfig
    {
        public static void AddMessageBusConfiguration(this IServiceCollection services,
            IConfiguration configuration)
        {
        }
    }
}