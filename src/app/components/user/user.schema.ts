import { Schema, model, Document } from "mongoose";
import { User } from "../../models/user.model";

const definition: Partial<Record<keyof User, any>> = {
  
  name: { type: String, required: true, lowercase: true, trim: true },
  lastName: { type: String, required: true, lowercase: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  password: { type: String, required: true},
  movilPhone: { type: String, required: false, trim: true },
  idDisciplines: [{ type: Schema.Types.ObjectId, required: false, ref: 'Discipline', trim: true, autopopulate: true }],
  idSkills: [{ type: Schema.Types.ObjectId, required: false, ref: 'Skill', trim: true, autopopulate: true }],
  idSavedProjects: [{ type: Schema.Types.ObjectId, required: false, ref: 'Project', trim: true, autopopulate: true }],
  idMyProjects: [{ type: Schema.Types.ObjectId, required: false, ref: 'Project', trim: true, autopopulate: true }],
  idRequestC: [{ type: Schema.Types.ObjectId, required: false, ref: 'RequestC', trim: true, autopopulate: true }],
  idRequestResults: [{ type: Schema.Types.ObjectId, required: false, ref: 'RequestC', trim: true, autopopulate: true }],
};

const schema: Schema<User> = new Schema(definition, { timestamps: true });
schema.plugin(require('mongoose-autopopulate'));

export default model<User & Document>('User', schema, 'user');
