const User = require('../models/user.models');
const { isDecimal, isInteger } = require('../utils/db');

exports.getUsers = async (req, res, next) => {
        const { id } = req.query;
    try {
      if(id){
        const user = await User.findOne({id:id}).select({createdAt: 0,updatedAt: 0, _id: 0, __v: 0});
        if (!user) {
          return res
            .status(404)
            .json({ error: "No user found!", statusCode: 404});
        } 
        return res
          .status(200)
          .json({
            user,
          });
      }
      else {

        const users = await User.find().sort({ id: -1 }).select({createdAt: 0,updatedAt: 0, _id: 0, __v: 0});
        if (users.length<1) {
          return res
            .status(404)
            .json({ error: "No users found!", statusCode: 404 });
        } 
        res.status(200).json({ users: users });
      }
    } catch (e) {
        return res.status(403).json({ error: "Server error",statusCode:500 });
    }
}


exports.addUser = async (req, res, next) => {
    try {
        const { name, id,la,lt,s,a } = req.query;
        // if (!name) {
        //   return res
        //     .status(403)
        //     .json({ error: "Please provide name!", statusCode: 403 });
        // }


          if (!id) {
            return res
              .status(403)
              .json({ error: "Please provide id", statusCode: 403 });
          }
          if (!lt) {
            return res
              .status(403)
              .json({ error: "Please provide lt", statusCode: 403 });
          }
          if (!la) {
            return res
              .status(403)
              .json({ error: "Please provide la", statusCode: 403 });
          }
          if (!a) {
            return res
              .status(403)
              .json({ error: "Please provide a", statusCode: 403 });
          }
          if (!s) {
            return res
              .status(403)
              .json({ error: "Please provide s", statusCode: 403 });
          }
          // if(!isInteger(id) ){
          //   return res
          //     .status(403)
          //     .json({ error: "Please provide valid id", statusCode: 403 });
          // }
          // if(!isDecimal(a) || !isDecimal(s) || !isDecimal(lt) || !isDecimal(la)){
          //   return res
          //     .status(403)
          //     .json({ error: "Please provide valid values", statusCode: 403 });
          // }
        const duplicateUser = await User.findOne({ id: id }).lean();
        if (duplicateUser) {
          console.log(duplicateUser);
          return res.status(403).json({ error: "User id taken!",statusCode:403 });
        }

        
        const newUser = new User({
            // name: name,
            id: id,
            latitude: la,
            longitude: lt,
            speed: s,
            acceleration: a
        });

        const savedUser = await newUser.save();
        res.status(200).json({ message: "User added" });
    } catch (e) {
      console.log(e);
        return res.status(403).json({ error: "Server error",statusCode:500 });
    }
}
