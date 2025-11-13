// schema.ts
import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Definição dos valores permitidos
export const TRANSACTION_TYPES = ["revenue", "expense"] as const;
export const STATUSES = ["pending", "completed", "cancelled"] as const;
export const PAYMENT_METHODS = [
  "credit_card",
  "debit_card",
  "pix",
  "cash",
  "boleto",
  "bank_transfer",
  "meal_voucher", // O famoso Vale Refeição/Alimentação
  "other",
] as const;
// Adicione quantas categorias quiser aqui
export const CATEGORIES = [
  // Receitas
  "salary",
  "freelance",
  "investment",
  "gift",
  // Despesas Essenciais
  "housing", // Aluguel, Condomínio
  "utilities", // Luz, Água, Internet
  "food", // Mercado, Restaurante (antigo 'lanche')
  "transport", // Uber, Gasolina, Ônibus
  "health", // Farmácia, Plano de Saúde
  "education", // Faculdade, Cursos
  // Estilo de Vida
  "leisure", // Cinema, Viagem
  "shopping", // Roupas, Eletrônicos
  "services", // Assinaturas (Netflix, Spotify)
  // Outros
  "other",
] as const;

export const transactionsTable = sqliteTable("transactions", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  description: text("description"),
  // Armazenando dinheiro como Inteiro (centavos)
  centsAmount: integer("cents_amount").notNull(),
  // --- AQUI ESTÃO OS ENUMS ---
  // O método .enum() aceita o array que criamos acima
  type: text("type", { enum: TRANSACTION_TYPES }).notNull(),
  status: text("status", { enum: STATUSES }).notNull().default("pending"),
  category: text("category", { enum: CATEGORIES }).notNull(),
  paymentMethod: text("payment_method", { enum: PAYMENT_METHODS }).notNull(),
  // Datas (SQLite guarda data como texto ISO string ou timestamp number)
  date: integer("date", { mode: "timestamp" }).notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type TransactionTableSelectMode = InferSelectModel<
  typeof transactionsTable
>;
export type TransactionsTableInsertMode = InferInsertModel<
  typeof transactionsTable
>;
