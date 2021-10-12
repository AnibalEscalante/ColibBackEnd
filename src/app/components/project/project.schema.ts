import { Schema, model, Document } from "mongoose";
import mongooseAutoPopulate from 'mongoose-autopopulate';
import { Project } from "src/app/models/project.model";

const definition: Partial<Record<keyof Project, any>> = {
  
  title: { type: String, required: true, lowercase: true, trim: true },
  content: { type: String, required: true, trim: true },
  state: { type: String, enum: ['Open','Close'], required: true, trim: true },
  finishDate: { type: Date, required: true},
  idSkills: [{ type: Schema.Types.ObjectId, ref: 'Skill', required: true, trim: true, autopopulate: true }],
  idDisciplines: [{ type: Schema.Types.ObjectId, ref: 'Discipline', required: true, trim: true, autopopulate: true }],
  idColaborators: [{ type: Schema.Types.ObjectId, ref: 'User', required: true, trim: true, autopopulate: true }],
};

const schema: Schema<Project> = new Schema(definition, { timestamps: true });
schema.plugin(mongooseAutoPopulate);

export default model<Project & Document>('Project', schema, 'project');
