import { Schema, model, Document } from "mongoose";
import { Message } from '../../models/message.model';

const definition: Partial<Record<keyof Message, any>> = {
  
  idUserSender: { type: String, required: true },
  idUserAddressee: { type: String, required: true },
  content: { type: String, required: true }
};

const schema: Schema<Message> = new Schema(definition, { timestamps: true });

export default model<Message & Document>('Message', schema, 'message');
