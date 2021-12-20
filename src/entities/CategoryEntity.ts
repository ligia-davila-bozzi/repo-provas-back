import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { TestEntity } from './TestEntity';

@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
      id: number;

  @Column()
      name: string;

  @OneToMany(() => TestEntity, (test) => test.category)
      tests: TestEntity[];

  getCategory() {
      return {
          id: this.id,
          name: this.name,
          tests: this.tests.map((test) => test.getTest()),
      };
  }
}
