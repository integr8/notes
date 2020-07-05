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
      nullable: 'NO',
    },
  })
  idNote: number;

  @belongsTo(
    () => User,
    {name: 'user'},
    {
      postgresql: {
        columnName: 'id_user',
        dataType: 'integer',
        nullable: 'NO',
      },
    },
  )
  idUser: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'content',
      dataType: 'text',
      nullable: 'NO',
    },
  })
  content: string;

  @property({
    type: 'date',
    postgresql: {
      columnName: 'created_at',
      dataType: 'timestamp with time zone',
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
