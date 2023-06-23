import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CityEntity } from '../../cities/entities/city.entity';

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id?: string;

  @Column({ name: 'city_id', nullable: false })
  cityId: string;

  @Column({ name: 'street', nullable: false })
  street: string;

  @Column({ name: 'number', nullable: false })
  number: number;

  @Column({ name: 'complement' })
  complement: string;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @Column({ name: 'active', nullable: false })
  active?: boolean;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'deleted_at' })
  deletedAt?: Date;

  @ManyToOne(() => CityEntity, (address) => address.addresses)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
  city?: CityEntity;
}
