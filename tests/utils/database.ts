import { getManager, getRepository } from 'typeorm';
import { CategoryEntity } from '../../src/entities/CategoryEntity';
import { PeriodEntity } from '../../src/entities/PeriodEntity';
import { ProfessorEntity } from '../../src/entities/ProfessorEntity';
import { SubjectEntity } from '../../src/entities/SubjectEntity';
import { TestEntity } from '../../src/entities/TestEntity';

async function clearDatabase() {
    await getRepository(SubjectEntity).delete({});
    await getRepository(TestEntity).delete({});
    await getRepository(CategoryEntity).delete({});
    await getRepository(ProfessorEntity).delete({});
    await getManager().query(`
        ALTER SEQUENCE tests_id_seq RESTART WITH 1;
        ALTER SEQUENCE categories_id_seq RESTART WITH 1;
        ALTER SEQUENCE subjects_id_seq RESTART WITH 1;
        ALTER SEQUENCE professors_id_seq RESTART WITH 1;
    ;`);
}

async function createCategories() {
    const categoriesArray = ['P1', 'P2', 'P3', '2ch', 'Outras'];
    const categories = categoriesArray.map((category) => (
        getRepository(CategoryEntity).create({
            name: category,
        })));
    await getRepository(CategoryEntity).save(categories);
}

async function createPeriods() {
    const periodsArray = ['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '10º'];
    const periods = periodsArray.map((period) => (
        getRepository(PeriodEntity).create({
            name: period,
        })));
    await getRepository(PeriodEntity).save(periods);
}

async function createSubject() {
    await getManager().query(`
        INSERT INTO subjects (name, period_id)
        VALUES ('Cálculo I', 1), ('Cálculo II', 2), ('Físico-Química I', 3)
    ;`);
}

async function createProfessor() {
    await createSubject();
    await getManager().query(`
        INSERT INTO professors (name)
        VALUES ('João da Silva'), ('Maria de Jesus'), ('Lúcia Souza')
    ;`);
    await getManager().query(`
        INSERT INTO subject_professors (subject_id, professor_id)
        VALUES (1, 1), (1, 2), (2, 2)
    ;`);
}

export {
    clearDatabase,
    createCategories,
    createPeriods,
    createSubject,
    createProfessor,
};
