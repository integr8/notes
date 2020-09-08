import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteModule } from './notes/notes.module';
import { Note } from './notes/note.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://172.17.0.2/notes',
      useUnifiedTopology: true,
      entities: [Note],
    }),
    NoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
