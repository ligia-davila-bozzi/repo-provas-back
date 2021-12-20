import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';
import { createTest } from '../factories/testFactory';
import { clearDatabase, createCategories } from '../utils/database';

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe('POST /test-register', () => {
    afterEach(async () => {
        await clearDatabase();
    });

    it('status 201 for create test success', async () => {
        await createCategories();
        const testBody = await createTest();
        const response = await supertest(app).post('/test-register').send(testBody);

        expect(response.status).toBe(201);
    });

    it('status 400 for invalid body', async () => {
        await createCategories();
        const { name, pdfLink } = await createTest();
        const response = await supertest(app).post('/test-register').send({ name, pdfLink });

        expect(response.status).toBe(400);
    });
});
