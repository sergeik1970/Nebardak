import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

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

// Обслуживание статических файлов React приложения
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Маршрут для проверки работоспособности сервера
app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Сервер работает');
});

// Тестовый маршрут API
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Добро пожаловать в API Nebardak!' });
});

// Тестовый маршрут для проверки связи фронтенда и бэкенда
app.get('/api/test', (req: Request, res: Response) => {
  res.json({ 
    message: 'Связь между фронтендом и бэкендом работает!',
    timestamp: new Date().toISOString(),
    server: 'Nebardak Backend',
    status: 'success'
  });
});

// Обработка всех остальных маршрутов - возвращаем React приложение
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});