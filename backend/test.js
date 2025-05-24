const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.payment.create({
    data: {
      phone: '0911223344',
      amount: 100,
      status: 'pending'
    }
  });

  console.log('Saved:', result);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
