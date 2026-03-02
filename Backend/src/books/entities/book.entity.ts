import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Added unique ISBN to prevent duplicates and ensure clean analytics data
  @Column({ unique: true, nullable: true }) 
  isbn: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  genre: string;

  @Column('int')
  pageCount: number;

  @Column({ default: 'English' })
  language: string;

  // Added for the React frontend UI
  @Column({ nullable: true })
  coverImageUrl: string;

  @Column('int', { nullable: true })
  publishedYear: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}