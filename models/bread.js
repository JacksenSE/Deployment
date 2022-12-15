// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const breadSchema = new Schema ( {
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' },
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})

// helper methods 
breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

breadSchema.statics.getBakedBreads = function (baker) {
  return this.find({baker: baker})
    .then(foundBreads => {
      console.log(foundBreads)
    })
}

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread