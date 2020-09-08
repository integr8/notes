import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}

  async findAll(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  create(noteDTO: Note): Promise<Note> {
    const note = new Note();
    note.content = noteDTO.content;

    return this.noteRepository.save(note);
  }
}
