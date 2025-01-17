const db = require('./connections');

const addUserToDB = async (userObj) => {
  console.log('addUser to DB query');
  
  const { username, household, password } = userObj;
  const query = `
  INSERT INTO app_user ("username", "household","password") 
  VALUES ($1, $2, $3)
  RETURNING *`
  const values = [username, household, password];
  
  try{
    const response = await db.query(query, values);
    const user = response.rows[0];
    return user;
  }catch(err){
    console.log(err);
  }
};
  

// const getUser = async (specificUser) => {
//   console.log('made it to the getuser query');
//   const { userID } = specificUser;
//   const query = `
//   SELECT FROM `
// }

module.exports= {
  addUserToDB,
  getUser,
}