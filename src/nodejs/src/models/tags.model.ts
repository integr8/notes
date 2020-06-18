import {Entity, model, property} from '@loopback/repository';

@model()
export class Tags extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_tag?: number;

  @property({
    type: 'string',
    required: true,
  })
  tag_name: string;


  constructor(data?: Partial<Tags>) {
    super(data);
  }
}

export interface TagsRelations {
  // describe navigational properties here
}

export type TagsWithRelations = Tags & TagsRelations;
