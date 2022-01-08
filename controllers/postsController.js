const express = require("express");
const postRoutes = express.Router();

const UsersService = require("../services/postsService");
const postObj = new UsersService();

postRoutes.get("/getAllPosts", (req, res) => {
  const postsList = postObj.getAllPosts().map((post) => {
    return {
      id: post.id,
      status: post.status,
      dateOfPost: post.dateOfPost,
    };
  });
  return res.json(postsList);
});

postRoutes.post("/addNewUser", (req, res) => {
  const { body } = req;
  postObj.addNewPost(body.id, body.status, body.dateOfPost);
  res.send(JSON.stringify({ postAdd: true }));
});

module.exports = postRoutes;
