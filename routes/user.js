import express from "express";
const router = express.Router();

import {
  signUp,
  login,
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controller/user-controller.js";
import { auth } from "../utils/token-check.js";

router.post("/sign-up", signUp);

router.post("/login", login);

router.post("/add-blog", auth, addBlog);

router.get("/get-blogs", auth, getAllBlogs);

router.get("/get-by-id/:id", auth, getBlogById);

router.put("/update-blog/:id", auth, updateBlog);

router.delete("/delete-blog/:id", auth, deleteBlog);

export default router;
