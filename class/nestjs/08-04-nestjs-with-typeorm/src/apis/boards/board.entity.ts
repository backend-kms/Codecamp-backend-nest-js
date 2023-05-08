import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Board class가 실행될 때, typeorm에 의해 Entity 테이블을 만들어 줌
export class Board {
  @PrimaryGeneratedColumn('increment') // 자동으로 생성될 값의 컬럼, increment: 데이터가 한 줄씩 쌓일 때마다 자동으로 숫자가 1씩 증가하여 값이 생성됨
  // uuid : 중복되지 않는 문자열 ID가 자동으로 생성됨
  number: number;

  @Column()
  writer: string;

  @Column()
  title: string;

  @Column()
  contents: string;
}
