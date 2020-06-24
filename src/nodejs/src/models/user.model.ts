import {Entity, hasMany, model, property} from '@loopback/repository';
import {Note, NoteWithRelations} from './note.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: 'public',
      table: 'users',
    },
  },
})
export class User extends Entity {
  @property({
    type: 'number',
    generated: true,
    id: true,
    postgresql: {
      columnName: 'id_user',
      dataType: 'integer',
      nullable: 'NO',
    },
  })
  idUser: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    postgresql: {
      columnName: 'username',
      dataType: 'character varying',
      dataLength: 100,
      nullable: 'NO',
    },
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    postgresql: {
      columnName: 'full_name',
      dataType: 'character varying',
      dataLength: 200,
      nullable: 'NO',
    },
  })
  fullName: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    postgresql: {
      columnName: 'email',
      dataType: 'character varying',
      dataLength: 200,
      nullable: 'NO',
    },
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    length: 300,
    postgresql: {
      columnName: 'password',
      dataType: 'character varying',
      dataLength: 300,
      nullable: 'NO',
    },
  })
  password: string;

  @property({
    type: 'date',
    postgresql: {
      columnName: 'created_at',
      dataType: 'timestamp with time zone',
    },
  })
  createdAt: string;

  @hasMany(() => Note, {keyTo: 'idUser', name: 'notes'})
  notes?: Note[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  notes?: NoteWithRelations;
}

export type UserWithRelations = User & UserRelations;
