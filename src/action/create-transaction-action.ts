"use server";

import {
  TransactionCategory,
  TransactionModel,
  TransactionPaymentMethod,
  TransactionStatus,
  TransactionType,
} from "@/model/transaction";

export type ResponseCreateTransactionAction = {
  success: boolean;
  errors: string[];
  data: TransactionModel;
};

export const createTransactionAction = async (
  prevState: ResponseCreateTransactionAction,
  formData: FormData,
): Promise<ResponseCreateTransactionAction> => {
  const id = (formData.get("id") as string) || "";
  const title = (formData.get("title") as string) || "";
  const description = (formData.get("description") as string) || "";
  const centsAmount = (Number(formData.get("centsAmount")) as number) || 0;
  const category = (formData.get("category") as TransactionCategory) || "food";
  const type = (formData.get("type") as TransactionType) || "expense";
  const createdAt = (formData.get("createdAt") as string) || "";
  const updatedAt = (formData.get("updatedAt") as string) || "";
  const status = (formData.get("status") as TransactionStatus) || "pending";
  const paymentMethod =
    (formData.get("paymentMethod") as TransactionPaymentMethod) || "pix";


    console.log(prevState);

  console.log({
    id,
    title,
    description,
    centsAmount,
    category,
    type,
    createdAt,
    updatedAt,
    status,
    paymentMethod,
  });

  const data = {
    id,
    title,
    description,
    centsAmount,
    category,
    type,
    createdAt,
    updatedAt,
    status,
    paymentMethod,
  };

  return { data: data, errors: [], success: true };
};
