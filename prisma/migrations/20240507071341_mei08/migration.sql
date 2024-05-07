-- AlterTable
ALTER TABLE "address" ALTER COLUMN "label" DROP NOT NULL,
ALTER COLUMN "owner_name" DROP NOT NULL,
ALTER COLUMN "owner_telp" DROP NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "serviceFee" (
    "id" SERIAL NOT NULL,
    "partner_id" INTEGER NOT NULL,
    "totalFee" INTEGER NOT NULL,
    "lackOfFee" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "serviceFee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "serviceFee" ADD CONSTRAINT "serviceFee_partner_id_fkey" FOREIGN KEY ("partner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
