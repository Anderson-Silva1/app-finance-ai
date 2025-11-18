import { InfoDashboard } from "@/components/dashboard/info-dashboard-grafico";
import { InfoDashboardNumber } from "@/components/dashboard/info-dashboard-number";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const DashboardPage = async () => {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6">
      <section className="flex justify-between">
        <Link href="/transactions/transaction/new-transaction">
          <Button className="text-foreground">Criar Transação</Button>
        </Link>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o mês" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {[
                { id: 0, nome: "Janeiro", abreviado: "Jan", valor: "01" },
                { id: 1, nome: "Fevereiro", abreviado: "Fev", valor: "02" },
                { id: 2, nome: "Março", abreviado: "Mar", valor: "03" },
                { id: 3, nome: "Abril", abreviado: "Abr", valor: "04" },
                { id: 4, nome: "Maio", abreviado: "Mai", valor: "05" },
                { id: 5, nome: "Junho", abreviado: "Jun", valor: "06" },
                { id: 6, nome: "Julho", abreviado: "Jul", valor: "07" },
                { id: 7, nome: "Agosto", abreviado: "Ago", valor: "08" },
                { id: 8, nome: "Setembro", abreviado: "Set", valor: "09" },
                { id: 9, nome: "Outubro", abreviado: "Out", valor: "10" },
                { id: 10, nome: "Novembro", abreviado: "Nov", valor: "11" },
                { id: 11, nome: "Dezembro", abreviado: "Dez", valor: "12" },
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

      <InfoDashboardNumber />

      <Separator />

      <InfoDashboard />

      <Separator />
    </main>
  );
};

export default DashboardPage;
