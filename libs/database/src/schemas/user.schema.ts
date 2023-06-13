import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

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
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
