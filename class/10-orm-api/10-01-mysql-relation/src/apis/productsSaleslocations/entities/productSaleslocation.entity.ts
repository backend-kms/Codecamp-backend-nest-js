import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductSaleslocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column()
  addressDetail: string;

  @Column({ type: 'decimal', precision: 9, scale: 6 }) // 9자리 중 6자리 소수점
  lat: number; // 위도

  @Column({ type: 'decimal', precision: 9, scale: 6 })
  lng: number; // 경도

  @Column()
  meetingTime: Date; // 만나는 시간
}
