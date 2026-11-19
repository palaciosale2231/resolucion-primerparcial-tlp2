// * ARCHIVO A COMPLETAR
import { body } from "express-validator";
import {
  ProjectModel,
  TechnologyModel,
  UserModel,
} from "../../models/index.js";

export const createProjectValidation = [
  // TODO: 1. Validar code: obligatorio y único (ProjectModel).

  body("code")
    .notEmpty()
    .withMessage("El código del proyecto es obligatorio.")
    .isString()
    .isLength({ min: 2, max: 100 })
    .trim()
    .escape(),

  // TODO: 2. Validar name y description como obligatorios.

  body("name")
    .notEmpty()
    .withMessage("El nombre del proyecto es obligatorio.")
    .isString()
    .isLength({ min: 2, max: 100 })
    .trim()
    .escape(),

  body("description")
    .notEmpty()
    .withMessage("La descripción del proyecto es obligatoria.")
    .isString()
    .isLength({ min: 2, max: 255 })
    .trim()
    .escape(),

  // TODO: 3. Validar status: opcional y limitado a los estados permitidos.

  body("status")
    .optional()
    .isIn(["pending", "in_progress", "completed", "cancelled"])
    .trim()
    .escape(),

  // TODO: 4. Validar start_date como fecha válida y budget como número positivo, ambos obligatorios.

  body("start_date")
    .notEmpty()
    .isISO8601()
    .withMessage("Invalid date format"),

  body("budget")
    .notEmpty()
    .isFloat({ gt: 0 })
    .withMessage("Budget must be a positive number"),

  // TODO: 5. Validar leader_id: debe existir y pertenecer a un usuario activo (UserModel).

  body("leader_id").isMongoId().withMessage("Invalid leader ID"),

  // TODO: 6. Validar technologies: lista de ids que existan (TechnologyModel).

  body("technologies")
    .isArray({ min: 0 })
    .withMessage("Technologies must be an array"),
  
];

export const updateProjectValidation = [

  // TODO: 7. Validar code como opcional y único, excluyendo el propio proyecto que se edita.

  body("code")
    .optional()
    .isString()
    .isLength({ min: 2, max: 100 })
    .trim()
    .escape(),
  // TODO: 8. Validar name y description como opcionales y no vacíos.

  body("name")
    .optional()
    .isString()
    .isLength({ min: 2, max: 100 })
    .trim()
    .escape(),

  body("description")
    .optional()
    .isString()
    .isLength({ min: 2, max: 255 })
    .trim()
    .escape(),

  // TODO: 9. Validar status, start_date y budget como opcionales, con las mismas reglas que al crear.

  body("status")
    .optional()
    .isIn(["pending", "in_progress", "completed", "cancelled"])
    .trim()
    .escape(),

  body("start_date")
    .optional()
    .isISO8601()
    .withMessage("Invalid date format"),

  body("budget")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Budget must be a positive number"),

  // TODO: 10. Validar leader_id como opcional, existente y de un usuario activo.

  body("leader_id").optional().isMongoId().withMessage("Invalid leader ID"),

  // TODO: 11. Validar technologies como opcional, con ids que existan.
  
  body("technologies")
    .optional()
    .isArray({ min: 0 })
    .withMessage("Technologies must be an array"),
];
