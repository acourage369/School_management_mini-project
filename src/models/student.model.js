import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    programe: {
        type: String,
        required: true,
    },
    hallName: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Student", studentSchema);