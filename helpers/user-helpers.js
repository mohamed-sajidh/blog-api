import bcrypt from "bcrypt";
import userModel from "../model/user-schema.js";
import blogModel from "../model/blog-schema.js";
const UserModel = userModel();
const BlogModel = blogModel();

export const doSignUp = (signupData) => {
  return new Promise(async (resolve, reject) => {
    const duplicate = await UserModel.findOne({
      where: { email: signupData.email },
    });
    if (duplicate) {
      reject({ message: "email already exists" });
    }
    signupData.password = await bcrypt.hash(signupData.password, 10);
    const userData = await UserModel.create(signupData);
    resolve(userData.dataValues);
  });
};

export const doLogin = (loginData) => {
  return new Promise(async (resolve, reject) => {
    const userData = await UserModel.findOne({
      where: { email: loginData.email },
    });
    if (!userData) {
      reject({ message: "invalid email" });
    }
    const result = await bcrypt.compare(loginData.password, userData.password);

    if (result) {
      resolve(userData.dataValues);
    } else {
      reject({ message: "password is wrong" });
    }
  });
};

export const createBlog = (blog) => {
  return new Promise(async (resolve, reject) => {
    const duplicate = await BlogModel.findOne({
      where: { heading: blog.heading },
    });
    if (duplicate) {
      reject({ message: "Heading already exists" });
    }
    const newBlog = await BlogModel.create(blog);
    resolve(newBlog.dataValues);
  });
};

export const getBlogs = () => {
  return new Promise(async (resolve, reject) => {
    const data = await BlogModel.findAll();
    resolve(data);

    if (!data) {
      reject({ message: "No blogs found" });
    }
  });
};

export const blogById = (blogId) => {
  return new Promise(async (resolve, reject) => {
    const data = await BlogModel.findOne({ where: { id: blogId } });
    if (data) {
      resolve(data);
    } else {
      reject({ message: "No blog found with provided id" });
    }
  });
};

export const editBlog = (blogId, blogData) => {
  return new Promise(async (resolve, reject) => {
    const data = await BlogModel.update(
      { heading: blogData.heading, description: blogData.description },
      { where: { id: blogId }, returning: true }
    );
    if (data) {
      resolve(data[1]);
    } else {
      reject({ message: "Blog with the provided id is not updated" });
    }
  });
};

export const removeBlog = (blogId) => {
  return new Promise(async (resolve, reject) => {
    const result = await BlogModel.destroy({ where: { id: blogId } });
    if (result) {
      resolve({ message: "Blog is deleted" });
    } else {
      reject({ message: "Blog with the provided id is not deleted" });
    }
  });
};
