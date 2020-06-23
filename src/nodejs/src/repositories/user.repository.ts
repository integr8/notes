import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {PostgresqlDataSource} from '../datasources';
import {Note, User, UserRelations} from '../models';
import {NoteRepository} from './note.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.idUser,
  UserRelations
> {
  public readonly notes: HasManyRepositoryFactory<
    Note,
    typeof Note.prototype.idNote
  >;

  constructor(
    @inject('datasources.postgresql') dataSource: PostgresqlDataSource,
    @repository.getter('NoteRepository')
    protected noteRepositoryGetter: Getter<NoteRepository>,
  ) {
    super(User, dataSource);

    this.notes = this.createHasManyRepositoryFactoryFor(
      'notes',
      noteRepositoryGetter,
    );

    this.registerInclusionResolver('notes', this.notes.inclusionResolver);
  }
}
