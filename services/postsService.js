const Post = require("../models/posts");

class PostsService {
  #postsList = [
    {
      id: 1641671571299,
      status: "Hello!",
      dateOfPost:
        "Sat Jan 08 2022 21:52:51 GMT+0200 (Eastern European Standard Time)",
    },
    {
      id: 11111,
      status: "Hello!",
      dateOfPost: "Sat Jan 08 2022 21:52:51",
    },
  ];

  addNewPost = (id, status, dateOf) => {
    const post = new Post(id, status, dateOf);
    this.#postsList.push(post);
    return post;
  };

  getAllPosts = () => {
    return this.#postsList;
  };
}

module.exports = PostsService;
