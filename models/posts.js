class Post {
  #id;
  #status;
  #dateOfPost;

  constructor(id, status, dateOfPost) {
    this.#id = id;
    this.#status = status;
    this.#dateOfPost = dateOfPost;
  }

  getPost = () => {
    return this.#status;
  };
}

module.exports = Post;
