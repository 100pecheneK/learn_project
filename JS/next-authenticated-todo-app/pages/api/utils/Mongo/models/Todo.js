import mongoose, { Schema } from 'mongoose'


const TodoSchema = new Schema(
  {
    fields: {
      description: {
        type: String,
      },
      userId: {
        type: String,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
)


const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)

export default TodoModel
