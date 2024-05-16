const mongoose = require('mongoose');
// const ObjectId = mongoose.SchemaTypes.ObjectId;

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, "Por favor rellene todos los campos"]
    },
    completed:{
        type:String,
        required: [true, "Por favor rellene todos los campos"]
    }, 
},{ timestamps: true });


const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;