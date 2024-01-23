const requestDDC = {
  numContrato: 1000009402,
  parcelasRemanescentes: 101,
  saldoDevedor: 102.0,
  demonstrativoSaldoDevedor: [
    {
      numero: 1,
      dataVencimento: "2024-01-03T13:59:53.776Z",
      valorParcela: 100.0,
      dataPagamento: "2024-01-03T13:59:53.776Z",
      valorPago: 101.0,
      amortizacao: 10.0,
      juros: 5.0,
      jurosPercentual: 5.0,
      iof: 1.0,
      saldoDevedor: 2.0,
      status: "Em Atraso",
    },
  ],
};

const requestIRPF = {
numCpf: "62439191027",
anoBase:2022,
demonstrativoSaldoContratos:[
   {
      CodProduto:310,
      SaldoTotalPago:0.00,
      SaldoContratado:2400.0,
      numContrato:1000000858
   },
   {
      CodProduto:310,
      SaldoTotalPago:0.00,
      SaldoContratado:1200.0,
      numContrato:1000000859
   },
   {
      CodProduto:310,
      SaldoTotalPago:0.00,
      SaldoContratado:1440.0,
      numContrato:1000000860
   }
]
}

module.exports = {requestDDC, requestIRPF}