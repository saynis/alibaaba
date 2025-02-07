import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const salt = bcrypt.genSaltSync(10)
import dotenv from 'dotenv'
dotenv.config();

const tokenGenator = (user)=>{
   return jwt.sign({user},process.env.JWT_SEC,{
    expiresIn: "3m"
   })
}


export const registerUser = async(req,res)=>{
   const {email, password} = req.body;

   if(!email || !password){
    res.json({
       status: "error",
        massage: "canot be empty"
    })
    return
   }

   const checkUser = await prisma.users.findFirst({
    where:{
        email
    }
   })

   if(checkUser){
     res.json({
        status: "eror",
        massage: "this email all ready exists"
     })
     return
   }

   const hashedpassword = bcrypt.hashSync(req.body.password, 10)
   const newUser = await prisma.users.create({
    data:{
        email,
        password: hashedpassword
    },

    select:{
      email: true,
      password: true
    }
   })
   
   const token = tokenGenator(newUser.userid)
   res.status(201).json({
    massage: "succefully regestred new user",
    users: {...newUser},
    token
   })

}

export const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
          res.json({
                status:"Error",
                message: "Please enter your email or password"
          });
          return
    }
    const userExisting = await prisma.users.findFirst({
          where:{
                email
          },
          select:{
                userid: true,
                email: true,
                password: true,
                role: true
          }
    })
    if(!userExisting){
          res.json({
                status:"Error",
                message: "Fadlan Emailka ama Password ka mid ayaa qaldan"
          })
          return
    }
    const dehashedPassword = await bcrypt.compareSync(password,userExisting.password);
    if(dehashedPassword){
          const token = tokenGenator(userExisting.userid)
          res.json({
                status:'Success',
                message: "You are now Logged",
                token,
                users: userExisting
          })
    }else{
          res.json({
                status:'Error',
                message: "Your are not Logged"
          })
    }
}

export const getAllUsers = async(req,res)=>{
   try {
    const users = await prisma.users.findMany();
 
    res.status(200).json({
        massage: "here is all users",
        users
    })
    
   } catch (error) {
    res.status(404).json({
        massage: "eror"
    })
   }
}

