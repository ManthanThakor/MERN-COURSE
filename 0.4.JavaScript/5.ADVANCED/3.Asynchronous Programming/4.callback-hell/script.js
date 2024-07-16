//! ---Nested Timeout Functions----

const task1 = (callback) => {
  setTimeout(() => {
    // console.log("Task 1 Completed");
    callback();
  }, 3000);
};

const task2 = (callback) => {
  setTimeout(() => {
    // console.log("Task 2 Completed");
    callback();
  }, 2000);
};

const task3 = (callback) => {
  setTimeout(() => {
    // console.log("Task 3 Completed");
    callback();
  }, 1000);
};
//! start the first task

task1(function () {
  // once the first is completed start the second
  task2(function () {
    // once the second is completed start the third
    task3(function () {
      //? console.log("All tasks completed");
    });
  });
});

//! --fetch user data(dummy)

const userData = { id: 1, name: "Agnes Appia" };

const userPosts = [
  { id: 101, content: "First Post" },
  { id: 102, content: "Second Post" },
  { id: 103, content: "Third Post" },
];
const PostComments = {
  101: ["comment 1", "comment"],
  102: ["comment 2", "comment"],
  103: ["comment 3", "comment"],
};

//! fetch user data

const fetchUserData = (userId, callback) => {
  console.log("fetching user data...");
  setTimeout(() => {
    // const userData = { id: userId, name: `User ${userId}` };
    callback(userData);
  }, 1000);
};

//! fetch user data

const fetchUserPost = (userId, callback) => {
  console.log("fetching user Posts...");
  setTimeout(() => {
    // const userData = { id: userId, name: `User ${userId}` };
    callback(userPosts);
  }, 1000);
};
//! fetch posts comments

const fetchPostComments = (postId, callback) => {
  console.log("fetching post comments...");
  setTimeout(() => {
    // const comments = PostComments[postId];
    callback(PostComments[postId] || []);
  }, 500);
};

//! initiate the process

fetchUserData(1, function (userData) {
  console.log("User Data", userData);
  fetchUserPost(userData.id, function (userPosts) {
    console.log("User Posts", userPosts);
    userPosts.forEach((post) => {
      fetchPostComments(post.id, function (comments) {
        console.log(`Post ${post.id} Comments`, comments);
      });
    });
  });
});
