
import { Router } from "express";
import { login } from "../autorisation/login.js";
//import { verifierToken } from "../autorisation/verifierToken.js";
import { administrateurList } from "../controller/administrateurCController.js";

import loginRules from "../validations/loginValidations.js";

const authRoute=Router()
''
authRoute.post('/',loginRules, login)

//authRoute.get('/', verifierToken, administrateurList)

export default authRoute

