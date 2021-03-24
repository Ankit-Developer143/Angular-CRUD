const Course = require("../models/Course");

//@POST
//Create new course
const createNewCourse = async (req, res) => {
  const { name, description, address } = req.body;
  const course = new Course({
    name,
    description,
    address,
  });
  try {
    const newCourse = await course.save();
    res.status(201).json({
      status: "Successful",
      message: "New course created",
      data: {
        newCourse,
      },
    });
  } catch (err) {
    /* handle error */
    res.json({
      status: "Unsuccessful",
      message: err.message,
    });
  }
};

module.exports = createNewCourse;
