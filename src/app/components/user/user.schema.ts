import { Schema, model, Document } from "mongoose";
import { User } from "../../models/user.model";

const definition: Partial<Record<keyof User, any>> = {
  
  nickName: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  movilPhone: { type: String, trim: true },
  profileImg: { type: String},
  idDisciplines: [{ type: Schema.Types.ObjectId,  ref: 'Discipline', trim: true, autopopulate: true }],
  idSkills: [{ type: Schema.Types.ObjectId,  ref: 'Skill', trim: true, autopopulate: true }],
  idSavedProjects: [{ type: Schema.Types.ObjectId, ref: 'Project', trim: true, autopopulate: true }],
  idMyProjects: [{ type: Schema.Types.ObjectId, ref: 'Project', trim: true, autopopulate: true }],
  idCollaboratingProjects: [{ type: Schema.Types.ObjectId, ref: 'Project', trim: true, autopopulate: true }],
  idRequestsC: [{ type: Schema.Types.ObjectId, ref: 'RequestC', trim: true, autopopulate: true }],
  idContacts: [{ type: Schema.Types.ObjectId,  ref: 'Contact', trim: true, autopopulate: true }],
  idRequestResults: [{ type: Schema.Types.ObjectId, ref: 'RequestC', trim: true, autopopulate: true }]
};

const schema: Schema<User> = new Schema(definition, { timestamps: true });
schema.plugin(require('mongoose-autopopulate'));

export default model<User & Document>('User', schema, 'user');
