import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/drizzle/migrations", // Criada altmáticamente, onde estárá nossas migrações ou oc COMANDOS SQL
  schema: "./src/db/drizzle/schemas", // Tipagem do nosso banco de dados
  dialect: "sqlite", // Nome do nosso Banco de Dados
  dbCredentials: {
    url: "./finance-app.sqlite", // Endereco/link/nome/url do nosso banco de dados
  },
});
