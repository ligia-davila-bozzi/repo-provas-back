import { getManager, getRepository } from 'typeorm';
import { CategoryEntity } from '../../src/entities/CategoryEntity';
import { TestEntity } from '../../src/entities/TestEntity';

async function clearDatabase() {
    await getRepository(TestEntity).delete({});
    await getRepository(CategoryEntity).delete({});
    await getManager().query(`
        ALTER SEQUENCE tests_id_seq RESTART WITH 1;
        ALTER SEQUENCE categories_id_seq RESTART WITH 1
    ;`);
}

async function createCategories() {
    const categoriesArray = ['P1', 'P2', 'P3', '2ch', 'Outras'];
    const categories = categoriesArray.map((category) => (
        getRepository(CategoryEntity).create({
            name: category,
        })));
    const a = await getRepository(CategoryEntity).save(categories);
    return a;
}

export {
    clearDatabase,
    createCategories,
};
