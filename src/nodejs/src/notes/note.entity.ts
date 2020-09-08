import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({
  name: 'notes',
})
export class Note {
  @ObjectIdColumn()
  id: ObjectID;

  @ApiProperty()
  @Column()
  content: string;
}
