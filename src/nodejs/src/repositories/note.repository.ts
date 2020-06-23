import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {PostgresqlDataSource} from '../datasources';
import {Note, NoteRelations, User} from '../models';
import {UserRepository} from './user.repository';

export class NoteRepository extends DefaultCrudRepository<
  Note,
  typeof Note.prototype.idNote,
  NoteRelations
> {
  public readonly user: BelongsToAccessor<User, typeof User.prototype.idUser>;

  constructor(
    @inject('datasources.postgresql') dataSource: PostgresqlDataSource,
    @repository.getter('UserRepository')
    protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Note, dataSource);

    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
