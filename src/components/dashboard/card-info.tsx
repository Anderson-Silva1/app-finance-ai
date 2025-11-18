import clsx from "clsx";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type CardProps = {
  order: number;
  label: string;
  value: number;
  mode: "balance" | "revenue" | "expense" | "count";
};

export const CardInfo = ({ order, label, value, mode }: CardProps) => {
  const modeColorClasses = {
    balance: "text-foreground",
    revenue: "text-green-500",
    expense: "text-red-500",
    count: "text-orange-500",
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
        <span
          className={clsx("text-3xl font-bold", `${modeColorClasses[mode]}`)}
        >
          {value}
        </span>
      </CardContent>
    </Card>
  );
};
