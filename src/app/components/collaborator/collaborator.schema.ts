import { Schema, model, Document } from "mongoose";
import { Collaborator } from '../../models/collaborator.model';

const definition: Partial<Record<keyof Collaborator, any>> = {
  
  name: { type: String, required: true, lowercase: true, trim: true },
  lastName: { type: String, required: true, lowercase: true, trim: true },
  idUser: { type: String, required: true}
};

const schema: Schema<Collaborator> = new Schema(definition, { timestamps: true });

export default model<Collaborator & Document>('Collaborator', schema, 'collaborator');
