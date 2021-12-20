import { getRepository } from 'typeorm';
import { CategoryEntity } from '../entities/CategoryEntity';

async function getTestsBySubjectAndCategories(subjectId: number) {
    const result = await getRepository(CategoryEntity)
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.tests', 'tests')
        .leftJoinAndSelect('tests.professor', 'professor')
        .where('tests.subject.id = :subjectId', { subjectId })
        .getMany();
    return result;
}

async function getTestsByProfessorAndCategories(professorId: number) {
    const result = await getRepository(CategoryEntity)
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.tests', 'tests')
        .leftJoinAndSelect('tests.subject', 'subject')
        .where('tests.professor.id = :professorId', { professorId })
        .getMany();
    return result;
}

export {
    getTestsBySubjectAndCategories,
    getTestsByProfessorAndCategories,
};
