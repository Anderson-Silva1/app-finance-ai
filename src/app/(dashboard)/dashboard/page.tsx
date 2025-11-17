import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";

const DashboardPage = async () => {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6">
      <section className="flex justify-between">
        <Button className="text-foreground">Criar Transação</Button>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o mês" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {[
                { id: 1, nome: "Janeiro", abreviado: "Jan", valor: "01" },
                { id: 2, nome: "Fevereiro", abreviado: "Fev", valor: "02" },
                { id: 3, nome: "Março", abreviado: "Mar", valor: "03" },
                { id: 4, nome: "Abril", abreviado: "Abr", valor: "04" },
                { id: 5, nome: "Maio", abreviado: "Mai", valor: "05" },
                { id: 6, nome: "Junho", abreviado: "Jun", valor: "06" },
                { id: 7, nome: "Julho", abreviado: "Jul", valor: "07" },
                { id: 8, nome: "Agosto", abreviado: "Ago", valor: "08" },
                { id: 9, nome: "Setembro", abreviado: "Set", valor: "09" },
                { id: 10, nome: "Outubro", abreviado: "Out", valor: "10" },
                { id: 11, nome: "Novembro", abreviado: "Nov", valor: "11" },
                { id: 12, nome: "Dezembro", abreviado: "Dez", valor: "12" },
              ].map((item) => {
                return (
                  <SelectItem key={item.id} value={item.abreviado}>
                    {item.nome}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>

      <section className="flex w-full flex-wrap gap-6">
        <CardInfo order={-1} label="Saldo Real" value={1000} mode="balance" />
        <CardInfo
          order={-2}
          label="Despesas Mensais"
          value={500}
          mode="revenue"
        />
        <CardInfo
          order={-3}
          label="Receitas Mensais"
          value={3000}
          mode="expense"
        />
      </section>
      <Separator />
      <section className="flex w-full flex-wrap gap-6">
        <CardInfo label="Pendentes" mode="count" order={0} value={6} />
        <CardInfo label="Completas" mode="count" order={1} value={1} />
        <div className="order-3 flex w-full flex-wrap gap-6">
          <CardInfo
            label="Saldo com valores pendentes"
            mode="balance"
            order={1}
            value={1}
          />
          <CardInfo
            label="Receitas Pendentes"
            mode="revenue"
            order={1}
            value={1}
          />
          <CardInfo
            label="Despesas Pendentes"
            mode="expense"
            order={1}
            value={1}
          />
        </div>
      </section>
      <Separator />
      <section className="grid gap-6 lg:grid-cols-3">
        {/* CARD DO GRÁFICO */}
        <div className="bg-card border-border/40 col-span-1 rounded-xl border p-6 shadow lg:col-span-1">
          <h3 className="mb-4 text-lg font-semibold">
            Gráfico — Top 10 Categorias de Gastos
          </h3>
          <div className="bg-muted/20 flex h-[280px] items-center justify-center rounded-lg">
            {/* Aqui entra o gráfico de pizza futuramente */}
            <span className="text-muted-foreground text-sm">
              (Gráfico Pizza)
            </span>
          </div>
        </div>

        {/* LISTAGEM DE TRANSAÇÕES */}
        <div className="bg-card border-border/40 col-span-1 flex flex-col gap-4 rounded-xl border p-6 shadow lg:col-span-2">
          <h3 className="text-lg font-semibold">Últimas transações</h3>

          <div className="divide-border/40 flex flex-col divide-y">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4 py-3 text-sm">
                <span className="text-muted-foreground w-24">13/10/25</span>
                <span className="flex-1 font-medium">Transação teste</span>
                <span className="w-24 text-blue-600 dark:text-blue-400">
                  Receita
                </span>
                <span className="w-28">Comida</span>
                <span className="w-20">Pix</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Separator />
    </main>
  );
};

export default DashboardPage;

type CardProps = {
  order: number;
  label: string;
  value: number;
  mode: "balance" | "revenue" | "expense" | "count";
};

const CardInfo = ({ order, label, value, mode }: CardProps) => {
  const modeColor = {
    balance: "foreground",
    revenue: "green-500",
    expense: "red-500",
    count: "orange-500",
  };

  return (
    <Card
      className={clsx(
        `order-${order}`,
        // "bg-muted rounded-sm",
        "min-w-80 flex-1",
        "grow-[300px]",
        "flex flex-col items-start justify-center gap-4",
        mode === "count" ? "items-center justify-center" : "",
      )}
    >
      <CardHeader className="w-full">
        <CardTitle>{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <span className={clsx("text-3xl font-bold", `text-${modeColor[mode]}`)}>
          {value}
        </span>
      </CardContent>
    </Card>
  );
};
