import { Router } from "express";

import user from "./app/controllers/UserController"

const routes = new Router();

// Users

routes.get("/users", user.index);
routes.get("/users/:id", user.show);
routes.post("/users", user.create);
routes.put("/users/:id", user.update);
routes.delete("/users/:id", user.delete);

export default routes;