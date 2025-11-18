export const InfoDashboard = () => {
  return (
    <>
      <section className="flex flex-col gap-6 xl:flex-row">
        {/* CARD DO GRÁFICO */}
        <CardGrafico />

        {/* LISTAGEM DE TRANSAÇÕES */}
        <UltimasTransacoes />
      </section>
    </>
  );
};

const UltimasTransacoes = () => {
  const ultimasTransacoes = [
    {
      id: "123123123",
      date: "13/10/2004",
      title: "Transação teste 1",
      type: "Receita",
      category: "Comida",
      methodPayment: "Pix",
    },

    {
      id: "123123123",
      date: "13/10/2004",
      title: "Transação teste 2",
      type: "Receita",
      category: "Comida",
      methodPayment: "Pix",
    },

    {
      id: "123123123",
      date: "13/10/2004",
      title: "Transação teste 3",
      type: "Receita",
      category: "Comida",
      methodPayment: "Pix",
    },

    {
      id: "123123123",
      date: "13/10/2004",
      title: "Transação teste 4",
      type: "Receita",
      category: "Comida",
      methodPayment: "Pix",
    },

    {
      id: "123123123",
      date: "13/10/2004",
      title: "Transação teste 5",
      type: "Receita",
      category: "Comida",
      methodPayment: "Pix",
    },

    {
      id: "123123123",
      date: "13/10/2004",
      title: "Transação teste 6",
      type: "Receita",
      category: "Comida",
      methodPayment: "Pix",
    },

    // {
    //   id: "123123123",
    //   date: "13/10/2004",
    //   title: "Transação teste 7",
    //   type: "Receita",
    //   category: "Comida",
    //   methodPayment: "Pix",
    // },

    // {
    //   id: "123123123",
    //   date: "13/10/2004",
    //   title: "Transação teste 8",
    //   type: "Receita",
    //   category: "Comida",
    //   methodPayment: "Pix",
    // },

    // {
    //   id: "123123123",
    //   date: "13/10/2004",
    //   title: "Transação teste 9",
    //   type: "Receita",
    //   category: "Comida",
    //   methodPayment: "Pix",
    // },

    // {
    //   id: "123123123",
    //   date: "13/10/2004",
    //   title: "Transação teste 10",
    //   type: "Receita",
    //   category: "Comida",
    //   methodPayment: "Pix",
    // },

    // {
    //   id: "123123123",
    //   date: "13/10/2004",
    //   title: "Transação teste 11",
    //   type: "Receita",
    //   category: "Comida",
    //   methodPayment: "Pix",
    // },

    // {
    //   id: "123123123",
    //   date: "13/10/2004",
    //   title: "Transação teste 12",
    //   type: "Receita",
    //   category: "Comida",
    //   methodPayment: "Pix",
    // },
  ];

  return (
    <div className="bg-card border-border/40 col-span-1 flex flex-1 flex-col gap-4 rounded-xl border p-6 shadow">
      <h3 className="text-lg font-semibold">Últimas 10 transações</h3>

      <div className="overflow-x-auto">
        <div className="divide-border/40 min-w-[650px] divide-y">
          {ultimasTransacoes.slice(0, 10).map((i) => (
            <div key={i.id} className="flex gap-4 py-3 text-sm">
              <span className="text-muted-foreground flex-1 shrink-0">
                {i.date}
              </span>

              <span className="flex-2 shrink-0 font-medium">{i.title}</span>

              <span className="flex-1 shrink-0 text-blue-600 dark:text-blue-400">
                {i.type}
              </span>

              <span className="flex-1 shrink-0">{i.category}</span>

              <span className="flex-1 shrink-0">{i.methodPayment}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CardGrafico = () => {
  return (
    <div className="bg-card border-border/40 col-span-1 rounded-xl border p-6 shadow lg:col-span-1">
      <h3 className="mb-4 text-lg font-semibold">
        Gráfico — Top 10 Categorias de Gastos
      </h3>
      <div className="bg-muted/20 flex h-[280px] items-center justify-center rounded-lg">
        {/* Aqui entra o gráfico de pizza futuramente */}
        <span className="text-muted-foreground text-sm">(Gráfico Pizza)</span>
      </div>
    </div>
  );
};
