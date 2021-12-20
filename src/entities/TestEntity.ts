import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { SubjectEntity } from './SubjectEntity';
import { CategoryEntity } from './CategoryEntity';
import { ProfessorEntity } from './ProfessorEntity';

@Entity('tests')
export class TestEntity {
  @PrimaryGeneratedColumn()
      id: number;

  @Column()
      name: string;

  @Column({ name: 'pdf_link' })
      pdfLink: string;

  @ManyToOne(() => CategoryEntity, (category) => category.tests, { eager: true })
  @JoinColumn({ name: 'category_id' })
      category: CategoryEntity;

  @ManyToOne(() => SubjectEntity, (category) => category.tests, { eager: true })
  @JoinColumn({ name: 'subject_id' })
      subject: SubjectEntity;

  @ManyToOne(() => ProfessorEntity, (professor) => professor.tests, { eager: true })
  @JoinColumn({ name: 'professor_id' })
      professor: ProfessorEntity;

  getTest() {
      return {
          id: this.id,
          name: this.name,
          category: this.category.name,
          subject: this.subject.name,
          professor: this.professor.name,
          pdfLink: this.pdfLink,
      };
  }
}
