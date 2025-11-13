interface TransactionModel {
  id: string;
  title: string;
  description?: string;
  centsAmount: number; // Valor em centavos
  category: "salario" | "lanche";
  type: "revenue" | "expense";
  createdAt: string;
  updatedAt: string;
  status: "pending" | "completed" | "cancelled";
  paymentMethod: "credit_card" | "debit_card" | "pix" | "cash" | "transfer";
}
