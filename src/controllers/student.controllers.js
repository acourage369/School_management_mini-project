import Student from "../models/student.model.js";

//lets create a new student
const CREATE_STUDENT = async (req, res) => {
    const { fName, mName, lName, programe, hName} = req.body;

    if (!fName || !mName || !lName || !programe || ! hName) {
      res.status(500).json({
        err: "make sure all fields are correct",
      });
    }

    const student = new Student({
        firstName: fName,
        middleName: mName,
        lastName: lName,
        programe: programe,
        hallName: hName,
    });

    const response = await student.save();

    res.status(201).json(response);
}

const FIND_STUDENT = async (req, res) => {
    //request id from paran
    const { id } = req.params;

    //find student by id
    const student = await Student.find({_id : id});

    //if student id is not found
    if (!student) {
        return res.status(404).json({
            err: "student not found",
        })
    }
    //if student id is found
    res.status(200).json(student)
};

export { CREATE_STUDENT, FIND_STUDENT };