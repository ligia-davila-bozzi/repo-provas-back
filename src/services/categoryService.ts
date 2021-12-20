import { getRepository } from 'typeorm';
import { CategoryEntity } from '../entities/CategoryEntity';

async function getCategories() {
    const categories = await getRepository(CategoryEntity).find();
    return categories;
}

export {
    getCategories,
};
