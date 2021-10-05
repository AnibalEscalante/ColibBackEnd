import { Schema, model, Document } from "mongoose";
import mongooseAutoPopulate from 'mongoose-autopopulate';
import { User } from "src/app/models/user.model";

const definition: Partial<Record<keyof User, any>> = {
  
  name: { type: String, required: true, lowercase: true, trim: true },
  lastName: { type: String, required: true, lowercase: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  password: { type: String, required: true},
  movilPhone: { type: String, required: true, trim: true },
  
  property: { type: Schema.Types.ObjectId, required: true, ref: 'Property', trim: true, autopopulate: true },
  lessee: { type: Schema.Types.ObjectId, required: true, ref: 'User', trim: true, autopopulate: true },
  infoUser: {
    names: { type: String, required: true, lowercase: true, trim: true },
    rut: { type: String, required: true, trim: true },
    nationality: { type: String, required: true, lowercase: true, trim: true },
    location: { type: Schema.Types.ObjectId, required: true, ref: 'Location', trim: true, autopopulate: true },
    civilStatus: { type: String, required: true, lowercase: true, trim: true },
    profession: { type: String, required: true, lowercase: true, trim: true }
  },
  legalPersonSigner: { type: Boolean, required: true },
  leaseTime: { type: Number, required: true },
  transferDate: { type: Date, required: true },
  startDate: { type: Date, required: true },
  departureDate: { type: Date, required: true },
  type: { type: String, required: true, lowercase: true, trim: true },
  storage: { type: String, required: true, lowercase: true },
  itemsStoreCategory: [{ type: String, required: true, lowercase: true, trim: true }],
  subtotal: { type: Number, required: true, min: 0 },
  comission: { type: Number, required: true, min: 0 },
  totalPerMonth: { type: Number, required: true, min: 0 },
  code: { type: Schema.Types.ObjectId, ref: 'Code', trim: true, autopopulate: true },
  payments: [{ type: Schema.Types.ObjectId, ref: 'Payment', trim: true, autopopulate: true }],
  mailShippingContract: { type: String, lowercase: true, trim: true },
  contract: { type: Schema.Types.ObjectId, ref: 'Contract', trim: true, autopopulate: true },
  state: { type: String, enum: ['Reserva','En curso','Finalizado'], trim: true }
};

const schema: Schema<Rent> = new Schema(definition, { timestamps: true });
schema.plugin(mongooseAutoPopulate);

export default model<Rent & Document>('Rent', schema, 'rent');
