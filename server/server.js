require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sequelize = require('./config/database.sqlite');
const WizardData = require('./models/WizardData');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

// Эндпоинт для API
app.post('/api/wizard', async (req, res) => {
    const { name, email, phone, quantity } = req.body;

    try {
        // Сохранение данных в базу
        const newEntry = await WizardData.create({ name, email, phone, quantity });

        // Расчет цены
        const price = quantity <= 10 ? 10 : quantity <= 100 ? 100 : 1000;

        // Отправка email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Wizard Submission',
            text: `Thank you, ${name}. Here are your details:
        - Phone: ${phone}
        - Quantity: ${quantity}
        - Price: $${price}`,
        });

        res.status(200).json({ success: true, message: 'Email sent successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error processing data.' });
    }
    
});

// Функция старта приложения
const start = async () => {
    try {
        await sequelize.authenticate(); // Проверка подключения к базе
        await sequelize.sync(); // Синхронизация моделей
        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    } catch (error) {
        console.error('Unable to start server:', error);
    }
};

start();
