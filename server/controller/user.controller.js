import { errorHandler } from '../lib/utils.js';
import { userService } from '../service/index.js';

export const registerController = async (req, res) => {
    try {
      const response = await userService.register(req);
      console.log(response)
    
      return res.status(201).send({
        success:true,
        message:'User Register Successfully',
        user : response.user
      });
    } catch (error) {
      errorHandler(res,error);
    }
}

// POST LOGIN
export const loginController = async (req, res) => {
  try {
    console.log('user')

    const response = await userService.login(req);
  
    console.log('user',response.user)
     return res.status(200).send({
        success: true,
        message: "login successfully",
        user: response.user,
        token: response.token,
      });
  } catch (error) {
    console.log(error)
    errorHandler(res,error);
  }}

export default {
  loginController,
  registerController,
  
}