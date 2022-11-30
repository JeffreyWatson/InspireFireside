import { Schema } from "mongoose";


export const TodoSchema = new Schema(
  {
    completed: { type: Boolean, default: false },
    description: { type: String, required: true },
    user: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)