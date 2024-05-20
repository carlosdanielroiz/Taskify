import { Router } from "express";

import hello from "./app/controllers/HelloController"

const routes = new Router();

routes.get("/hello", hello.index);

export default routes;