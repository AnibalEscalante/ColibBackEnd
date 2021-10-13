import { Schema, model, Document } from "mongoose";
import { RequestC } from "../../models/requestC.model";

const definition: Partial<Record<keyof RequestC, any>> = {
  
  idProject: { type: Schema.Types.ObjectId, ref: 'Project', required: true, trim: true, autopopulate: true },
  idUserSender: { type: Schema.Types.ObjectId, ref: 'User', required: true, trim: true, autopopulate: true },
  state: { type: String, default: 'Pendiente', enum: ['Pendiente','Aceptada','Rechazada'], required: true, trim: true }
};

const schema: Schema<RequestC> = new Schema(definition, { timestamps: true });
schema.plugin(require('mongoose-autopopulate'));

export default model<RequestC & Document>('RequestC', schema, 'requestc');
