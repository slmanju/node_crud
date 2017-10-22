var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name:{ type: String, required: true },
    address: String,
    position: String,
    salary: Number,
    updated_at: { type: Date, default: Date.now },
});

var Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;