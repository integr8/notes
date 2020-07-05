import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Note} from '../models';
import {UserRepository} from '../repositories';

export class UserNoteController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) {}

  @get('/users/{id}/notes', {
    responses: {
      '200': {
        description: 'Array of User has many Note',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Note)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Note>,
  ): Promise<Note[]> {
    return this.userRepository.notes(id).find(filter);
  }
}
