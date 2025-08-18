import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Загрузка переменных окружения
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Маршрут для проверки работоспособности сервера
app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Сервер работает');
});

// Тестовый маршрут API
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Добро пожаловать в API Nebardak!' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});