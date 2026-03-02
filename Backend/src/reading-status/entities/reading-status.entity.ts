import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Book } from '../../books/entities/book.entity';

export enum ReadingStatusEnum {
  READ = 'READ',
  CURRENTLY_READING = 'CURRENTLY_READING',
  WANT_TO_READ = 'WANT_TO_READ',
  DNF = 'DNF',
}

@Entity('reading_statuses')
export class ReadingStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // We will mock this for now. Later, this connects to a User entity.
  @Column()
  userId: string; 

  @Column()
  bookId: string;

  // This creates a rigid Enum type in PostgreSQL
  @Column({
    type: 'enum',
    enum: ReadingStatusEnum,
  })
  status: ReadingStatusEnum;

  // This tells TypeORM how to fetch the actual book details when we query a status!
  @ManyToOne(() => Book)
  @JoinColumn({ name: 'bookId' })
  book: Book;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}