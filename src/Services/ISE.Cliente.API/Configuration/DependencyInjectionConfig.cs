using FluentValidation.Results;
using ISE.Cliente.API.Application.Commands;
using ISE.Cliente.API.Application.Events;
using ISE.Cliente.API.Data;
using ISE.Cliente.API.Data.Repository;
using ISE.Cliente.API.Models;
using ISE.Core.Mediator;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace ISE.Cliente.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IMediatorHandler, MediatorHandler>();
            services.AddScoped<IRequestHandler<RegistrarClienteCommand, ValidationResult>, ClienteCommandHandler>();
            services.AddScoped<INotificationHandler<ClienteRegistradoEvent>, ClienteEventHandler>();
            services.AddScoped<IClienteRepository, ClienteRepository>();
            services.AddScoped<ClientesContext>();
        }
    }
}