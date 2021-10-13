import { Schema, model, Document, Types } from "mongoose";
import { Auth } from "../../models/auth.model";

const definition: Partial<Record<keyof Auth, any>> = {
  email: { type: String, required: true },
  authenticated: { type: Types.ObjectId, refPath: 'entity', trim: true },
  entity: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  token: { type: String, required: false }
};

const schema: Schema<Auth> = new Schema({
  definition,
  entity: { type: String, required: true, enum: ['User'] },
}, { timestamps: true });

export default model<Auth & Document>('Auth', schema, 'auth');
