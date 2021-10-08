using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ISE.Pagamento.API.Data.Mappings
{
    public class PagamentoMapping : IEntityTypeConfiguration<Models.Pagamento>
    {
        public void Configure(EntityTypeBuilder<Models.Pagamento> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Ignore(c => c.CartaoCredito);

            builder.HasMany(c => c.Transacoes)
                .WithOne(c => c.Pagamento)
                .HasForeignKey(c => c.PagamentoId);

            builder.ToTable("Pagamentos");
        }
    }
}