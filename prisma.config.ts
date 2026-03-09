import { defineConfig } from "prisma/config";
import * as dotenv from "dotenv";

// Load .env file for local development (no-op on Vercel where env vars are injected)
dotenv.config();

export default defineConfig({
    schema: "prisma/schema.prisma",
    datasource: {
        url: process.env.DATABASE_URL,
    },
});
