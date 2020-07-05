import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Note, User} from '../models';
import {NoteRepository} from '../repositories';

export class NoteUserController {
  constructor(
    @repository(NoteRepository)
    public noteRepository: NoteRepository,
  ) {}

  @get('/notes/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Note',
        content: {
          'application/json': {
            schema: {type: User, items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.number('id') id: typeof Note.prototype.idNote,
  ): Promise<User> {
    return this.noteRepository.user(id);
  }
}
