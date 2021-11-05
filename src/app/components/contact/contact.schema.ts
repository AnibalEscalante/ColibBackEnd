import { Schema, model, Document } from "mongoose";
import { Contact } from '../../models/contact.model';

const definition: Partial<Record<keyof Contact, any>> = {
  
  name: { type: String, required: true, lowercase: true, trim: true },
  lastName: { type: String, required: true, lowercase: true, trim: true },
  idUser: { type: String, required: true },
  idSentMessages: [{ type: Schema.Types.ObjectId, ref: 'Message', autopopulate: true }],
  idRecievedMessages: [{ type: Schema.Types.ObjectId,  ref: 'Message', autopopulate: true }]
};

const schema: Schema<Contact> = new Schema(definition, { timestamps: true });
schema.plugin(require('mongoose-autopopulate'));

export default model<Contact & Document>('Contact', schema, 'contact');
