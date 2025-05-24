const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Sample route to test API
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Route to create a payment
app.post('/api/payments', async (req, res) => {
  const { phone, amount, status } = req.body;
  try {
    const payment = await prisma.payment.create({
      data: { phone, amount, status }
    });
    res.json(payment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error saving payment' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
