// * ARCHIVO A COMPLETAR
import { Router } from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getMyProjects,
  updateProject,
} from "../controllers/projects.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import { leaderMiddleware } from "../middlewares/leader.middleware.js";
import { validator } from "../middlewares/validator.middleware.js";
import {
  createProjectValidation,
  updateProjectValidation,
} from "../middlewares/validations/project.validation.js";

export const projectRoutes = Router();

// TODO: 1. Decidir y aplicar los middlewares que correspondan a cada ruta.

projectRoutes.post(
  "/",
  authMiddleware,
  validator,
  createProjectValidation,
  createProject,
);

projectRoutes.get("/projects", adminMiddleware, getAllProjects);

projectRoutes.get("/projects/my-projects", authMiddleware, getMyProjects);

projectRoutes.put(
  "/projects/:id",
  leaderMiddleware,
  updateProjectValidation,
  validator,
  updateProject,
);

projectRoutes.delete("/projects/:id", leaderMiddleware, deleteProject);
