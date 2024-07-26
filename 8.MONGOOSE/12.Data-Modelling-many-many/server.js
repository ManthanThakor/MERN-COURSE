const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

const dbUrl = "YOUR MONGO DB KEY Many-to-many";

// Connect to MongoDB
const connectToDB = async () => {
  try {
    await mongoose.connect(dbUrl, { autoIndex: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

connectToDB();

//! Define Course schema
const CourseSchema = new mongoose.Schema({
  name: String,
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const Course = mongoose.model("Course", CourseSchema);

//! Define Student schema
const StudentSchema = new mongoose.Schema({
  name: String,
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const Student = mongoose.model("Student", StudentSchema);

//! Create courses
const createCourses = async () => {
  try {
    const newCourses = await Course.create([
      { name: "Math 101" },
      { name: "History 101" },
      { name: "English 101" },
      { name: "Science 101" },
      { name: "Social Studies 101" },
      { name: "Geography 101" },
      { name: "Music 101" },
      { name: "Art 101" },
      { name: "Philosophy 101" },
      { name: "Chemistry 101" },
      { name: "Biology 101" },
      { name: "Physics 101" },
      { name: "Computer Science 101" },
    ]);
    console.log("Courses created:", newCourses);
  } catch (error) {
    console.error("Error creating courses:", error.message);
  }
};

//! Create students
const createStudents = async () => {
  try {
    const newStudents = await Student.create([
      { name: "Alice" },
      { name: "Bob" },
      { name: "Charlie" },
      { name: "David" },
      { name: "Eve" },
      { name: "Frank" },
      { name: "Grace" },
      { name: "Hannah" },
      { name: "Ian" },
      { name: "Jack" },
      { name: "Kelly" },
      { name: "Lisa" },
      { name: "Mary" },
      { name: "Nathan" },
      { name: "Olivia" },
      { name: "Peter" },
      { name: "Quinn" },
      { name: "Rachel" },
      { name: "Sam" },
      { name: "Taylor" },
    ]);
    console.log("Students created:", newStudents);
  } catch (error) {
    console.error("Error creating students:", error.message);
  }
};

//! Create courses and students
const createData = async () => {
  // await createCourses();
  // await createStudents();
};

createData().then(() => {
  // Apply students to courses
  applyToCourse(
    [
      "66a363a9b065b47b7f19fa46",
      "66a363a9b065b47b7f19fa47",
      "66a363a9b065b47b7f19fa48",
    ],
    "66a363a8b065b47b7f19fa29"
  );
  applyToCourse(
    [
      "66a363a9b065b47b7f19fa46",
      "66a363a9b065b47b7f19fa47",
      "66a363a9b065b47b7f19fa48",
      "66a363a9b065b47b7f19fa50",
      "66a363a9b065b47b7f19fa4d",
      "66a363a9b065b47b7f19fa4e",
    ],
    "66a363a8b065b47b7f19fa22"
  );
});

//! Student applying to courses
const applyToCourse = async (studentId, courseId) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { $push: { enrolledCourses: courseId } },
      { new: true }
    );

    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      { $push: { enrolledStudents: studentId } },
      { new: true }
    );

    console.log("Student applied to course:", {
      student: updatedStudent,
      course: updatedCourse,
    });
  } catch (error) {
    console.error("Error applying to course:", error.message);
  }
};

//! Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
