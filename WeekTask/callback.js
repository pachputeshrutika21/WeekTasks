const user2=[];

function userInfo()
{
    usersDetails(userInformation);
}
async function usersDetails(callback)
{ 
const response = await fetch("https://api.github.com/users");
const data= await response.json();
callback(data); 
} 
function userInformation(data)
{
 try
 {
  data.info.map((data1)=>user2.push(data1));
  console.log("callback!!!!");
  console.log(JSON.stringify(user2));
}
catch{
    console.log("Oh No!!!");
}
}