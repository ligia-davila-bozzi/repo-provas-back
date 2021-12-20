import { getRepository } from 'typeorm';
import { CategoryEntity } from '../entities/CategoryEntity';
import { TestEntity } from '../entities/TestEntity';

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

async function postTest(testBody: TestEntity) {
    const {
        name,
        pdfLink,
        category,
        subject,
        professor,
    } = testBody;

    const result = getRepository(TestEntity)
        .create({
            name,
            pdfLink,
            category,
            subject,
            professor,
        });

    await getRepository(TestEntity).save(result);
}

export {
    getTestsBySubjectAndCategories,
    getTestsByProfessorAndCategories,
    postTest,
};
