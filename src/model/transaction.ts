export interface TransactionModel {
  id: string;
  title: string;
  description?: string;
  centsAmount: number; // Valor em centavos
  category: TransactionCategory;
  type: TransactionType;
  createdAt: string;
  updatedAt: string;
  status: TransactionStatus;
  paymentMethod: TransactionPaymentMethod;
}

export type TransactionStatus = "pending" | "completed" | "cancelled";

export type TransactionPaymentMethod =
  | "credit_card"
  | "debit_card"
  | "pix"
  | "cash"
  | "boleto"
  | "bank_transfer"
  | "meal_voucher" // O famoso Vale Refeição/Alimentação
  | "other";

export type TransactionType = "revenue" | "expense";

export type TransactionCategory =
  // Receitas
  | "salary"
  | "freelance"
  | "investment"
  | "gift"

  // Despesas Essenciais
  | "housing" // Aluguel, Condomínio
  | "utilities" // Luz, Água, Internet
  | "food" // Mercado, Restaurante (antigo 'lanche')
  | "transport" // Uber, Gasolina, Ônibus
  | "health" // Farmácia, Plano de Saúde
  | "education" // Faculdade, Cursos

  // Estilo de Vida
  | "leisure" // Cinema, Viagem
  | "shopping" // Roupas, Eletrônicos
  | "services" // Assinaturas (Netflix, Spotify)

  // Outros
  | "other";
