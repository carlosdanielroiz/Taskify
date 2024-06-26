import { Router } from "express";

import user from "./app/controllers/UserController"
import mail from "./app/controllers/SendMailController"
import register from "./app/controllers/RegisterController"
import login from "./app/controllers/LoginController"
import code from "./app/controllers/ConfirmCodeController"

const routes = new Router();

// Login and register
routes.post("/register", register.create);
routes.post("/login", login.create);

// Users
routes.get("/users", user.index);
routes.get("/users/:id", user.show);
routes.post("/users", user.create);
routes.put("/users/:id", user.update);
routes.delete("/users/:id", user.delete);

// Send mail
routes.post("/send_mail", mail.create);

// Code confirmation
routes.post("/confirm_code", code.create);

export default routes;