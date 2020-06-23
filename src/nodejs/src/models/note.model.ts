import {belongsTo, Entity, model, property} from '@loopback/repository';
import {User, UserWithRelations} from './user.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: 'public',
      table: 'notes',
    },
  },
})
export class Note extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'id_note',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  idNote: number;

  @belongsTo(() => User, {keyTo: 'idUser', name: 'user'})
  idUser: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'content',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  content: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {
      columnName: 'created_at',
      dataType: 'timestamp with time zone',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  createdAt: string;

  constructor(data?: Partial<Note>) {
    super(data);
  }
}

export interface NoteRelations {
  User?: UserWithRelations;
}

export type NoteWithRelations = Note & NoteRelations;
