using System.Collections.Generic;
using System.Threading.Tasks;
using ISE.Cliente.API.Models;
using Microsoft.EntityFrameworkCore;

namespace ISE.Cliente.API.Data.Repository
{
    public class ClienteRepository : IClienteRepository
    {
        private readonly ClientesContext _context;
        
        public ClienteRepository(ClientesContext context)
        {
            _context = context;
        }
        
        public void Adicionar(Models.Cliente cliente)
        {
            _context.Clientes.Add(cliente);
        }

        public async Task<IEnumerable<Models.Cliente>> ObterTodos()
        {
            return await _context.Clientes.AsNoTracking().ToListAsync();
        }

        public async Task<Models.Cliente> ObterPorCpf(string cpf)
        {
            return await _context.Clientes.FirstOrDefaultAsync(c => c.Cpf.Numero == cpf);
        }
        
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}