import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { TestEntity } from './TestEntity';

@Entity('professors')
export class ProfessorEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToMany(() => TestEntity, (test) => test.professor)
        tests: TestEntity[];
}
