import { Schema, model, Document } from "mongoose";
import { Discipline } from "../../models/discipline.model";

const definition: Partial<Record<keyof Discipline, any>> = {
  name: { type: String, required: true, lowercase: true, trim: true } 
};

const schema: Schema<Discipline> = new Schema(definition, { timestamps: true });

export default model<Discipline & Document>('Discipline', schema, 'discipline');
