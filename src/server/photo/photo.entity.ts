import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text') description: string;

  @Column() filename: string;

  @Column('int') views: number;

  @Column() isPublished: boolean;
}
