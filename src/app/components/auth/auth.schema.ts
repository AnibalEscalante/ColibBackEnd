import { Schema, model, Document, Types } from "mongoose";
import { Auth } from "../../models/auth.model";

const definition: Partial<Record<keyof Auth, any>> = {
  email: { type: String, required: true },
  authenticated: { type: Types.ObjectId, required: true, refPath: 'entity'},
  password: { type: String, required: true },
  entity: { type: String, default: 'User' },
  token: { type: String, required: false }
};

const schema: Schema<Auth> = new Schema( definition, { timestamps: true });

export default model<Auth & Document>('Auth', schema, 'auth');
