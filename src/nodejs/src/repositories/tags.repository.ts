import {DefaultCrudRepository} from '@loopback/repository';
import {Tags, TagsRelations} from '../models';
import {PostgresqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TagsRepository extends DefaultCrudRepository<
  Tags,
  typeof Tags.prototype.id_tag,
  TagsRelations
> {
  constructor(
    @inject('datasources.postgresql') dataSource: PostgresqlDataSource,
  ) {
    super(Tags, dataSource);
  }
}
