import { Schema, model, Document } from "mongoose";
import mongooseAutoPopulate from 'mongoose-autopopulate';
import { User } from "src/app/models/user.model";

const definition: Partial<Record<keyof User, any>> = {
  
  name: { type: String, required: true, lowercase: true, trim: true },
  lastName: { type: String, required: true, lowercase: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  password: { type: String, required: true},
  movilPhone: { type: String, required: true, trim: true },
  idDisciplines: { type: Schema.Types.ObjectId, required: true, ref: 'Discipline', trim: true, autopopulate: true },
  idSkills: { type: Schema.Types.ObjectId, required: true, ref: 'Skill', trim: true, autopopulate: true },
  idSavedProjects: { type: Schema.Types.ObjectId, required: true, ref: 'Project', trim: true, autopopulate: true },
  idRequest: { type: Schema.Types.ObjectId, required: true, ref: 'Request', trim: true, autopopulate: true },
  idRequestResults: { type: Schema.Types.ObjectId, required: true, ref: 'Request', trim: true, autopopulate: true },
};

const schema: Schema<User> = new Schema(definition, { timestamps: true });
schema.plugin(mongooseAutoPopulate);

export default model<User & Document>('User', schema, 'user');
