-- CreateTable
CREATE TABLE "Pictures" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "x_min" INTEGER NOT NULL,
    "x_max" INTEGER NOT NULL,
    "y_min" INTEGER NOT NULL,
    "y_max" INTEGER NOT NULL,

    CONSTRAINT "Pictures_pkey" PRIMARY KEY ("id")
);
