const express= require("express")
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET ="JHGLSJshbjsdshjLYHGSUL7637267g7r73473487rh894ufh34u7h87g8G&^f7%4d65rf65f7G&";

const mongoUrl = "mongodb+srv://sdroutma:M2EAFPz-cQwPeZV@cluster0.swcea.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("Connected to database");})
.catch(e=>console.log(e));


require("./userDetails")
const User = mongoose.model("UserInfo");

//register method
app.post("/register",async(req,res)=>{
    const {fname,lname,email,password} = req.body; 
    
    const encryptedPassword = await bcryptjs.hash(password,10);
    try {
        const oldUser = await User.findOne({email});

        if(oldUser){
            return res.send({error: "User Exists"})
        }

        await User.create({
            fname,
            lname,
            email,
            password:encryptedPassword 
        });
        res.send({status:"Ok"})
    
    } catch (error) {
        res.send({status:"Error"})
    }
})

//login method
app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcryptjs.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "20m",
      });
  
      if (res.status(201)) {
        return res.json({ status: "Ok", data: token });
      } else {
        return res.json({ error: "Error" });
      }
    }
    res.json({ status: "Error", error: "Invalid password" });
  });
  

  app.post("/userDetails", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(user);
      if (user == "token expired") {
        return res.send({ status: "error", data: "token expired" });
      }
  
      const useremail = user.email;
      User.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) { }
  });
  


app.listen(8000,()=>{
    console.log("Server started");
});

app.post("/forgot-password",async(req,res)=>{
    const {email} = req.body;
    try {
        const oldUser = await User.findOne({email})
        if(!oldUser){
            return res.json({status:"User does not exist"});
        }
    
        const secret = JWT_SECRET +oldUser.password;
        const token = jwt.sign({email:oldUser.email, id: oldUser._id},secret,{expiresIn: "5m",});
        const link = `http://localhost:8000/reset-password/${oldUser._id}/${token}`;
        console.log(link);
    } catch (error) {
        
    }
});

app.get("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    res.send("Done");

});

/*API post request
app.post("/post",async(req,res)=>{
    console.log(req.body);
    const{data}=req.body;

    try {
        if(data=="saulDrout"){
            res.send({stats:"Ok"})
        }else{
            res.send({status: "User not found"})
        }
        
    } catch (error) {
        res.send({stats: "Error"})
    }
});

*/
