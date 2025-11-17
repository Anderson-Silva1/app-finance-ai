import { Button } from "@/components/ui/button";
import clsx from "clsx";

const DashboardPage = () => {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6">
      <section>
        <Button className="text-foreground">Criar Transação</Button>
      </section>
      <section className="mb-8 flex w-full flex-wrap gap-6">
        <Card order={-1} label="Saldo" value={1000} mode="balance" />
        <Card order={-2} label="Despesas Mensais" value={500} mode="revenue" />
        <Card order={-3} label="Receitas Mensais" value={3000} mode="expense" />
      </section>
    </main>
  );
};

export default DashboardPage;

type CardProps = {
  order: number;
  label: string;
  value: number;
  mode: "balance" | "revenue" | "expense";
};

const Card = ({ order, label, value, mode }: CardProps) => {
  const modeColor = {
    balance: "text-foreground",
    revenue: "text-green-500",
    expense: "text-red-500",
  };

  return (
    <div
      className={clsx(
        `order-${order}`,
        "bg-muted rounded-sm p-2",
        "min-w-80 flex-1",
        "grow-[300px]",
        "flex flex-col items-start justify-center gap-4",
      )}
    >
      <h3 className="text-muted-foreground font-bold">{label}</h3>
      <span className={clsx("text-3xl font-bold", modeColor[mode])}>
        R$ {value}
      </span>
    </div>
  );
};
