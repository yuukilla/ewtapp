import { Router } from "express";
import { 
  usersLogin,
  usersRegister
} from "../../controllers/usersController";
import * as validator from "../../middleware/userValidator";

const router = Router();

// /api/users/login
router.post('/login', validator.userLoginValidator, usersLogin);

// /api/users
router.post('/', validator.userRegisterValidator, usersRegister);

export default router;

