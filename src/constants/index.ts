import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionStatus,
  TransactionType,
} from "@/model/transaction";

export const PAYMENT_METHOD_LABELS: Record<TransactionPaymentMethod, string> = {
  credit_card: "Cartão de Crédito",
  debit_card: "Cartão de Débito",
  pix: "Pix",
  cash: "Dinheiro",
  boleto: "Boleto",
  bank_transfer: "Transferência Bancária",
  meal_voucher: "Vale Refeição / Alimentação",
  other: "Outros",
};

export const STATUS_LABELS: Record<TransactionStatus, string> = {
  pending: "Pendente",
  completed: "Efetivado", // ou "Pago" / "Recebido" dependendo do contexto
  cancelled: "Cancelado",
};

export const CATEGORY_LABELS: Record<TransactionCategory, string> = {
  // Receitas
  salary: "Salário",
  freelance: "Freelance / Extra",
  investment: "Rendimentos",
  gift: "Presente / Doação",

  // Despesas
  housing: "Moradia",
  utilities: "Contas (Luz/Água/Net)",
  food: "Alimentação",
  transport: "Transporte",
  health: "Saúde",
  education: "Educação",
  leisure: "Lazer",
  shopping: "Compras",
  services: "Serviços / Assinaturas",
  other: "Outros",
};

export const TRANSACTION_TYPE_LABELS: Record<TransactionType, string> = {
  revenue: "Receita",
  expense: "Despesa",
};
