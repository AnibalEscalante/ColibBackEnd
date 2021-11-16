import { Schema, model, Document } from "mongoose";
import { RequestC } from "../../models/requestC.model";

const definition: Partial<Record<keyof RequestC, any>> = {
  
  idProject: { type: Schema.Types.ObjectId, ref: 'Project', required: true, trim: true},
  idUserSender: { type: Schema.Types.ObjectId, ref: 'User', required: true, trim: true},
  state: { type: String, default: 'Pendiente', enum: ['Pendiente','Aceptada','Rechazada'], required: true, trim: true }
};

const schema: Schema<RequestC> = new Schema(definition, { timestamps: true });

export default model<RequestC & Document>('RequestC', schema, 'requestc');
