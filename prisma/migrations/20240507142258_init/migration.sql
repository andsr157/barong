/*
  Warnings:

  - A unique constraint covering the columns `[updated_at]` on the table `transaction` will be added. If there are existing duplicate values, this will fail.
  - Made the column `updated_at` on table `transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "transaction" ALTER COLUMN "updated_at" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "transaction_updated_at_key" ON "transaction"("updated_at");
