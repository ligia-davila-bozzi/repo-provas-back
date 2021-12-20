import { getRepository } from 'typeorm';
import { SubjectEntity } from '../entities/SubjectEntity';
import { ProfessorEntity } from '../entities/ProfessorEntity';

async function getProfessorsBySubjects() {
    const result = await getRepository(SubjectEntity).find({ relations: ['professors'] });
    return result;
}

async function getProfessors() {
    const result = await getRepository(ProfessorEntity)
        .createQueryBuilder('professor')
        .leftJoinAndSelect('professor.tests', 'tests')
        .getMany();
    return result;
}

export {
    getProfessorsBySubjects,
    getProfessors,
};
