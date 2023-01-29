import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;
prisma = new PrismaClient();
prisma.$connect();

export { prisma };
