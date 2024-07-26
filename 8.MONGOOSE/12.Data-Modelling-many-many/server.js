const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

const dbUrl =
  "mongodb+srv://thakormanthan849:HOQnOxugSZFFXWMG@myfirstmongodb.jm4tch7.mongodb.net/Many-to-many";

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

// Define Comment schema
const CommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const Comment = mongoose.model("Comment", CommentSchema);

// Define BlogPost schema
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

// Create a new blog post
const createBlogPost = async () => {
  try {
    const newBlogPost = new BlogPost({
      title: "My First Blog Post",
      content: "This is my first blog post",
    });

    const result = await newBlogPost.save();
    console.log("Blog post created", result);
  } catch (error) {
    console.error("Error creating blog post", error.message);
  }
};

createBlogPost();

// Create a new comment and add it to a blog post
const createComment = async () => {
  try {
    const newComment = new Comment({
      text: "This is a sample comment",
    });

    const result = await newComment.save();

    const blogPost = await BlogPost.findById("66a351573f21ea74d2c2584e");
    if (blogPost) {
      blogPost.comments.push(result._id);
      await blogPost.save();
      console.log("Comment created and added to blog post", result);
    } else {
      console.error("Blog post not found");
    }
  } catch (error) {
    console.error("Error creating comment", error.message);
  }
};

createComment();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
