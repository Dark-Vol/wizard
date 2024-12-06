const request = require('supertest');
const { sequelize, WizardData } = require('../models/WizardData');
const app = require('../server');

describe('Wizard API', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it('should save wizard data and send email successfully', async () => {
        const payload = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1234567890',
        quantity: 15,
        };

        const response = await request(app).post('/api/wizard').send(payload);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);

        const savedData = await WizardData.findOne({ where: { email: payload.email } });
        expect(savedData).not.toBeNull();
        expect(savedData.name).toBe(payload.name);
    });

    it('should return 500 if validation fails', async () => {
        const payload = {
        name: '',
        email: 'invalid-email',
        phone: '',
        quantity: 0,
        };

        const response = await request(app).post('/api/wizard').send(payload);

        expect(response.status).toBe(500);
        expect(response.body.success).toBe(false);
    });
});
