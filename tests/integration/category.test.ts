import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';
import { clearDatabase, createCategories } from '../utils/database';

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe('GET /categories', () => {
    afterEach(async () => {
        await clearDatabase();
    });

    it('status 200 for list category listing', async () => {
        await createCategories();
        const response = await supertest(app).get('/categories');
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                }),
            ]),
        );
        expect(response.status).toBe(200);
    });
});
