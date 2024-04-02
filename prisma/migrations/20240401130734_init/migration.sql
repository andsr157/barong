/*
  Warnings:

  - Added the required column `is_main` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" ADD COLUMN     "is_main" BOOLEAN NOT NULL,
ALTER COLUMN "detail" DROP NOT NULL;

-- AlterTable
ALTER TABLE "transaction" ALTER COLUMN "partner_id" DROP NOT NULL,
ALTER COLUMN "partner_rate" DROP NOT NULL,
ALTER COLUMN "partner_review" DROP NOT NULL,
ALTER COLUMN "total" DROP NOT NULL;

-- AlterTable
ALTER TABLE "transaction_detail" ALTER COLUMN "price" DROP NOT NULL;
