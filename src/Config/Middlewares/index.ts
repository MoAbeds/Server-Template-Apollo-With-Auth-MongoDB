/* eslint-disable no-param-reassign */

import express from "express";

import { decodeToken } from "../Auth/index";

async function auth(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (token != null) {
      const user = await decodeToken(token);
      req.user = user;
    } else {
      req.user = null;
    }
    return next();
  } catch (error) {
    throw error;
  }
}

export default app => {
  app.use(express.json());
  app.use(auth);
};
