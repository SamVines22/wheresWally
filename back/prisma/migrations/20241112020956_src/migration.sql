/*
  Warnings:

  - Added the required column `src` to the `Pictures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pictures" ADD COLUMN     "src" TEXT NOT NULL;
