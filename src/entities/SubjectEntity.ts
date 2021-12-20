import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { PeriodEntity } from './PeriodEntity';
import { TestEntity } from './TestEntity';
import { ProfessorEntity } from './ProfessorEntity';

@Entity('subjects')
export class SubjectEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @ManyToOne(() => PeriodEntity, (period) => period.subjects)
    @JoinColumn({ name: 'period_id' })
        period: PeriodEntity;

    @OneToMany(() => TestEntity, (tests) => tests.subject)
        tests: TestEntity[];

    @ManyToMany(() => ProfessorEntity, (professor) => professor.id)
    @JoinTable({
        name: 'subject_professors',
        joinColumn: {
            name: 'professor_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'subject_id',
            referencedColumnName: 'id',
        },
    })
        professors: ProfessorEntity[];
}
