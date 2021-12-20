import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { PeriodEntity } from './PeriodEntity';

@Entity('subjects')
export class SubjectEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @ManyToOne(() => PeriodEntity, (period) => period.subjects)
    @JoinColumn({ name: 'period_id' })
        period: PeriodEntity;
}
