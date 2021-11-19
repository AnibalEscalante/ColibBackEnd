import { Schema, model, Document } from "mongoose";
import { Collaborator } from '../../models/collaborator.model';

const definition: Partial<Record<keyof Collaborator, any>> = {
  
  nickName: { type: String, required: true, trim: true },
  profileImg: { type: String },
  idUser: { type: String, required: true}
};

const schema: Schema<Collaborator> = new Schema(definition, { timestamps: true });

export default model<Collaborator & Document>('Collaborator', schema, 'collaborator');
