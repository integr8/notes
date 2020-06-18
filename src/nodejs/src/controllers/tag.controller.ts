import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Tags} from '../models';
import {TagsRepository} from '../repositories';

export class TagController {
  constructor(
    @repository(TagsRepository)
    public tagsRepository : TagsRepository,
  ) {}

  @post('/tags', {
    responses: {
      '200': {
        description: 'Tags model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tags)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tags, {
            title: 'NewTags',
            exclude: ['id_tag'],
          }),
        },
      },
    })
    tags: Omit<Tags, 'id_tag'>,
  ): Promise<Tags> {
    return this.tagsRepository.create(tags);
  }

  @get('/tags/count', {
    responses: {
      '200': {
        description: 'Tags model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Tags) where?: Where<Tags>,
  ): Promise<Count> {
    return this.tagsRepository.count(where);
  }

  @get('/tags', {
    responses: {
      '200': {
        description: 'Array of Tags model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Tags, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Tags) filter?: Filter<Tags>,
  ): Promise<Tags[]> {
    return this.tagsRepository.find(filter);
  }

  @patch('/tags', {
    responses: {
      '200': {
        description: 'Tags PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tags, {partial: true}),
        },
      },
    })
    tags: Tags,
    @param.where(Tags) where?: Where<Tags>,
  ): Promise<Count> {
    return this.tagsRepository.updateAll(tags, where);
  }

  @get('/tags/{id}', {
    responses: {
      '200': {
        description: 'Tags model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Tags, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tags, {exclude: 'where'}) filter?: FilterExcludingWhere<Tags>
  ): Promise<Tags> {
    return this.tagsRepository.findById(id, filter);
  }

  @patch('/tags/{id}', {
    responses: {
      '204': {
        description: 'Tags PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tags, {partial: true}),
        },
      },
    })
    tags: Tags,
  ): Promise<void> {
    await this.tagsRepository.updateById(id, tags);
  }

  @put('/tags/{id}', {
    responses: {
      '204': {
        description: 'Tags PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tags: Tags,
  ): Promise<void> {
    await this.tagsRepository.replaceById(id, tags);
  }

  @del('/tags/{id}', {
    responses: {
      '204': {
        description: 'Tags DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tagsRepository.deleteById(id);
  }
}
