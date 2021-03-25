const Course = require("../models/Course");

//@PUT
//Update one user
const updateCourse = async (req, res) => {
  const { name, description, address } = req.body;  
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      // { _id: req.params.id },
      req.params.id,
      {
        $set: {
          name,
          description,
          address,
        },
      },
      { new: true }
    );
    res.json({
      status: "Successful",
      message: "Course successfully updated",
      data: {
        updatedCourse,
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

module.exports = updateCourse;
