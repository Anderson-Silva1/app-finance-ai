import { TransactionRepositoryModel } from "./transaction-repository-model";

export class TransactionRepository implements TransactionRepositoryModel {
  getAll(): void {
    console.log("PEGANDO TODAS AS TRANSAÇÕES");
  }
}
