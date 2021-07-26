﻿using System.Collections.Generic;
using System.Threading.Tasks;
using ISE.Core.Data;

namespace ISE.Cliente.API.Models
{
    public interface IClienteRepository : IRepository<Cliente>
    {
        void Adicionar(Cliente cliente);

        Task<IEnumerable<Cliente>> ObterTodos();
        Task<Cliente> ObterPorCpf(string cpf);
    }
}