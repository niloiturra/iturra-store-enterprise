using System;
using System.Threading.Tasks;
using ISE.Cliente.API.Application.Commands;
using ISE.Core.Mediator;
using ISE.Identidade.API.Controllers;
using ISE.WebApi.Core.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace ISE.Cliente.API.Controllers
{
    public class ClientesController : MainController
    {
        private readonly IMediatorHandler _mediatorHandler;

        public ClientesController(IMediatorHandler mediatorHandler)
        {
            _mediatorHandler = mediatorHandler;
        }

        [HttpGet("clientes")]
        public async Task<IActionResult> Index()
        {
            var resultado = await _mediatorHandler.EnviarComando(
                new RegistrarClienteCommand(Guid.NewGuid(), "Nilo", "nilo@teste.com", "85631079097"));

            return CustomResponse(resultado);
        }
    }
}