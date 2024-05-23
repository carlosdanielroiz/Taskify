import { Router } from "express";

import user from "./app/controllers/UserController"
import mail from "./app/controllers/SendMailController"
import register from "./app/controllers/RegisterController"

const routes = new Router();

// Send mail
routes.post("/register", register.create);

// Users
routes.get("/users", user.index);
routes.get("/users/:id", user.show);
routes.post("/users", user.create);
routes.put("/users/:id", user.update);
routes.delete("/users/:id", user.delete);

// Send mail
routes.post("/send_mail", mail.create);

export default routes;