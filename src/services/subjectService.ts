import { getRepository } from 'typeorm';
import { PeriodEntity } from '../entities/PeriodEntity';

async function getSubjectsByPeriod() {
    const result = await getRepository(PeriodEntity).find({ relations: ['subjects'] });
    return result;
}

export {
    getSubjectsByPeriod,
};
