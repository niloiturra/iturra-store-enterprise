﻿namespace ISE.Pedido.API.Application.Dto
{
    public class VoucherDto
    {
        public string Codigo { get; set; }
        public decimal? Percentual { get; set; }
        public decimal? ValorDesconto { get; set; }
        public int TipoDesconto { get; set; }
    }
}