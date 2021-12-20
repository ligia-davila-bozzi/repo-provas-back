import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { PeriodEntity } from './PeriodEntity';
import { TestEntity } from './TestEntity';

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
}
