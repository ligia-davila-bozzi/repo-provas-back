import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { SubjectEntity } from './SubjectEntity';

@Entity('periods')
export class PeriodEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToMany(() => SubjectEntity, (subject) => subject.period)
        subjects: SubjectEntity[];
}
