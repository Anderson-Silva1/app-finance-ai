import { Separator } from "@radix-ui/react-separator";
import { CardInfo } from "./card-info";

export const InfoDashboardNumber = () => {
  return (
    <>
      <section className="flex w-full flex-wrap gap-6">
        <CardInfo order={0} label="Saldo Real" value={1000} mode="balance" />

        <CardInfo
          order={1}
          label="Receitas Mensais"
          value={3000}
          mode="expense"
        />

        <CardInfo
          order={2}
          label="Despesas Mensais"
          value={500}
          mode="revenue"
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
    </>
  );
};
