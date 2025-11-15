"use client";



import {
  createTransactionAction,
  ResponseCreateTransactionAction,
} from "@/action/create-transaction-action";
import { InputSelect } from "@/components/input-select";
import { InputText } from "@/components/input-text";
import { useActionState, useEffect } from "react";



export default function NewTransaction() {
  const initialState: ResponseCreateTransactionAction = {
    data: {
      id: "",
      title: "",
      description: "",
      centsAmount: 0,
      category: "food",
      paymentMethod: "pix",
      status: "pending",
      type: "expense",
      createdAt: "",
      updatedAt: "",
    },
    errors: [],
    success: false,
  };

  const [state, formAction, isPending] = useActionState(
    createTransactionAction,
    initialState,
  );

  useEffect(() => {
    console.log({ ...state.data });
  }, [state.data]);

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="border-border/40 bg-card mx-auto max-w-xl rounded-2xl border p-8 shadow-xl backdrop-blur-sm">
        <h1 className="text-foreground mb-6 text-2xl font-bold tracking-tight">
          Nova Transação
        </h1>

        <form action={formAction} className="flex flex-col gap-8">
          <InputText
            isPending={isPending}
            label="Título"
            OptionName="title"
            defaultValue={state.data.title}
          />

          <InputText
            isPending={isPending}
            label="Descrição (opcional)"
            OptionName="description"
            defaultValue={state.data.description || ""}
          />

          <InputText
            isPending={isPending}
            label="Valor"
            type="number"
            OptionName="centsAmount"
            defaultValue={String(state.data.centsAmount)}
          />

          <div className="grid gap-8 md:grid-cols-2">
            <InputSelect
              mode="type"
              name="type"
              placeholder="type"
              defaultValue={state.data.type}
              isPending={isPending}
              label="Tipo"
            />

            <InputSelect
              mode="category"
              name="category"
              placeholder="category"
              defaultValue={state.data.category}
              isPending={isPending}
              label="Categoria"
            />

            <InputSelect
              mode="paymentMethod"
              name="paymentMethod"
              placeholder="paymentMethod"
              defaultValue={state.data.paymentMethod}
              isPending={isPending}
              label="Método de Pagamento"
            />

            <InputSelect
              mode="status"
              name="status"
              placeholder="status"
              defaultValue={state.data.status}
              isPending={isPending}
              label="Status da Transação"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="rounded-xl bg-blue-600 py-3 text-center font-medium text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Salvar Transação
          </button>
        </form>
      </div>
    </main>
  );
}
