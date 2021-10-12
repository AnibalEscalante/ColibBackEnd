import { Schema, model, Document } from "mongoose";
import { Skill } from "../../models/skill.model";

const definition: Partial<Record<keyof Skill, any>> = {
  name: { type: String, required: true, lowercase: true, trim: true }
};

const schema: Schema<Skill> = new Schema(definition, { timestamps: true });

export default model<Skill & Document>('Skill', schema, 'skill');
