import {
  doSignUp,
  doLogin,
  createBlog,
  getBlogs,
  blogById,
  editBlog,
  removeBlog,
} from "../helpers/user-helpers.js";
import { generateToken } from "../utils/generate-token.js";

export const signUp = (req, res) => {
  doSignUp(req.body)
    .then((response) => {
      res.status(200).json({ success: true, response });
    })
    .catch((error) => {
      res.status(404).json({ success: false, error });
    });
};

export const login = (req, res) => {
  doLogin(req.body)
    .then(async (response) => {
      const token = await generateToken(response.id)
      res.status(200).json({ success: true, response, token});
    })
    .catch((error) => {
      res.status(404).json({ success: false, error });
    });
};

export const addBlog = (req, res) => {
  createBlog(req.body)
    .then((response) => {
      res.status(200).json({ success: true, response });
    })
    .catch((error) => {
      res.status(404).json({ success: false, error });
    });
};

export const getAllBlogs = (req, res) => {
  getBlogs()
    .then((response) => {
      res.status(200).json({ success: true, response });
    })
    .catch((error) => {
      res.status(404).json({ success: false, error });
    });
};

export const getBlogById = (req, res) => {
  blogById(req.params.id)
    .then((response) => {
      res.status(200).json({ success: true, response });
    })
    .catch((error) => {
      res.status(404).json({ success: false, error });
    });
};

export const updateBlog = (req, res) => {
  editBlog(req.params.id, req.body)
    .then((response) => {
      res.status(200).json({ success: true, response });
    })
    .catch((error) => {
      res.status(404).json({ success: false, error });
    });
};

export const deleteBlog = (req, res) => {
  removeBlog(req.params.id)
    .then((response) => {
      res.status(200).json({ success: true, response });
    })
    .catch((error) => {
      res.status(404).json({ success: false, error });
    });
};
