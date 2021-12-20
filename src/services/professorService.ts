import { getRepository } from 'typeorm';
import { SubjectEntity } from '../entities/SubjectEntity';

async function getProfessorsBySubjects() {
    const result = await getRepository(SubjectEntity).find({ relations: ['professors'] });
    return result;
}

export {
    getProfessorsBySubjects,
};
