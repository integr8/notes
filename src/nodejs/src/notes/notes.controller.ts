import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Note } from './note.entity';
import { NotesService } from './notes.service';

@ApiTags('notes')
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @ApiOperation({})
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Note,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  create(@Body() note: Note): Promise<Note> {
    return this.notesService.create(note);
  }

  @Get()
  @ApiOperation({})
  findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }
}
