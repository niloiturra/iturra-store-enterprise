using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace ISE.Carrinho.API.Configuration
{
    public static class SwaggerConfig
    {
        public static IServiceCollection AddSwaggerConfiguration(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
                        {
                            c.SwaggerDoc("v1", new OpenApiInfo
                            {
                                Title = "Iturra Enterprise Carrinho API",
                                Description = "Esta API é totalmente inspirada no curso ASP .NET Core Enterprise Applications.",
                                Contact = new OpenApiContact() { Name = "Nilo Iturra", Email = "nilo.alan@hotmail.com" },
                                License = new OpenApiLicense() { Name = "MIT", Url = new Uri("https://opensource.org/licenses/MIT") }
                            });

                            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                            {
                                Description = "Insira o token JWT desta maneira: Bearer {seu token}",
                                Name = "Authorization",
                                Scheme = "Bearer",
                                BearerFormat = "JWT",
                                In = ParameterLocation.Header,
                                Type = SecuritySchemeType.ApiKey
                            });

                            c.AddSecurityRequirement(new OpenApiSecurityRequirement
                            {
                                {
                                    new OpenApiSecurityScheme
                                    {
                                        Reference = new OpenApiReference
                                        {
                                            Type = ReferenceType.SecurityScheme,
                                            Id = "Bearer"
                                        }
                                    },
                                    new string[] {}
                                }
                            });
                        });

            return services;
        }

        public static IApplicationBuilder UseSwaggerConfiguration(this IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
            });

            return app;
        }
    }
}