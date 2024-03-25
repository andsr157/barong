/*
  Warnings:

  - You are about to drop the column `VARCHAR(36)` on the `users` table. All the data in the column will be lost.
  - The required column `uuid` was added to the `users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "VARCHAR(36)",
ADD COLUMN     "uuid" TEXT NOT NULL;
