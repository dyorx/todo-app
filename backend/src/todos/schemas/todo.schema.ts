import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true })
export class Todo {
  @Prop()
  title: string;

  @Prop()
  status: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
