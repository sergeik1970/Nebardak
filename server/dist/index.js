"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Загрузка переменных окружения
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express_1.default.json());
// Обслуживание статических файлов React приложения
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/dist')));
// Маршрут для проверки работоспособности сервера
app.get('/health', (req, res) => {
    res.status(200).send('Сервер работает');
});
// Тестовый маршрут API
app.get('/api', (req, res) => {
    res.json({ message: 'Добро пожаловать в API Nebardak!' });
});
// Тестовый маршрут для проверки связи фронтенда и бэкенда
app.get('/api/test', (req, res) => {
    res.json({
        message: 'Связь между фронтендом и бэкендом работает!',
        timestamp: new Date().toISOString(),
        server: 'Nebardak Backend',
        status: 'success'
    });
});
// Обработка всех остальных маршрутов - возвращаем React приложение
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../client/dist/index.html'));
});
// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
//# sourceMappingURL=index.js.map