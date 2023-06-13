import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: (_doc, ret) => {
      delete ret._id;
    },
  },
})
export class Todo {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  isDone: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
