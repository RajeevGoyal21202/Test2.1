import JWT from "jsonwebtoken";
import { userModel } from "../model/user.model.js";
import { comparePassword, hash_password } from "../helper/auth.helper.js";


const register = async (req) => {
  try {
    const { name,email, password,role } = req.body;

    if (!name) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "name is required",
      });
    }

    if (!email) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "email is required",
      });
    }

    if (!password) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "password is required",
      });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      throw Object.assign(new Error(), {
        name: "CONFLICT",
        message: "User Already exists",
      });
    }
    if (!role) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "role is required",
      });
    }

    const hashed_password = await hash_password(password);

    const user = await userModel.create({ name,email, password: hashed_password,role });

    return user ;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const login = async (payload) => {
  try {
    const { email, password } = payload.body;
    console.log(email, password);
    if (!email || !password) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "Email or Password is missing",
      });
    }

    const user = await userModel.findOne({ email });
    // console.log(user);
    if (!user) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: `Email is not registered`,
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      throw Object.assign(new Error(), {
        name: "UNAUTHORIZED",
        message: `Password is not correct`,
      });
    }

    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    
    return { user, token };
  } catch (error) {
    throw error;
  }
};
const getUser = async (req) => {
  const userId = req.user._id;
  console.log("user", userId);
  if (!userId) {
    throw Object.assign(new Error(), {
      name: "BAD_REQUEST",
      message: `User not found`,
    });
  }
  let connection = await connectionModel.find({connectionBy:userId});
  // [{connectionTo}]
  // [connectionTo,connectonTo]
  // CONNECTION -> MAP ->
  connection = connection.map((i)=>{
    return i.connectedTo;
  })
  console.log('connection: ', connection);

  const users = await userModel.find({ $and:[
    
    
   { _id: { $ne: userId }},{_id:{$nin:connection}} 
  
  ]}).limit(8)
  return users;
};

const update = async (req, res) => {
  const userId = req.user._id;
  const user = await userModel.findById(userId);
  console.log("data2",req.body.data)
  if (user) {
    user.firstName = req.body.data.firstName || user.firstName;
    user.lastName = req.body.data.lastName || user.lastName;
    user.additionalName = req.body.data.additionalName || user.additionalName;
    user.school = req.body.data.school || user.school
    user.address.country = req.body.data.country || user.address.country;
    user.address.city = req.body.data.city || user.address.city;
    user.company.industry = req.body.data.industry || user.company.industry;
  }
  const updateUser = await user.save();
  console.log('updateUser: ', updateUser);
  return updateUser;
};

export const userService = {
  login,
  register,
  getUser,
  update,
};