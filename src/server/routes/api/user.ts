import { Router } from "express";
import { 
  userGet,
  userUpdate 
} from "../../controllers/userController";
import { authenticate } from "../../middleware/auth/authenticator";
import { userUpdateValidator } from "../../middleware/userValidator";

const router = Router();

router.get("/", authenticate, userGet);

router.post("/", authenticate, userUpdateValidator, userUpdate);

export default router;

