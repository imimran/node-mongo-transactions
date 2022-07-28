const User = require("../models/User");
const Profile = require("../models/Profile");
const conn = require('../db'); 


exports.register = async (req, res) => {

    const transactionOptions = {
        readConcern: { level: 'snapshot' },
        writeConcern: { w: 'majority' },
        readPreference: 'primary'
      };

        const session = await conn.startSession(transactionOptions);
    try {
        session.startTransaction();                    
        const user = await User.create([
            { 
                name: 'jon toe',
                status: false 
            }
        ], { session });
        console.log("user", user);

        if (user[0].status === false) {
            throw new Error('User exeist.');
          }

        await Profile.create([
            {
                gender: "male",
                user_id: user._id
            }
        ], { session });
        await session.commitTransaction();
        
        console.log('success');
    } catch (error) {
        console.log('error',error);
        await session.abortTransaction();
    }
         session.endSession();
      
  };