const basePoint="https://api.github.com";
const endPoint=`${basePoint}/users`;
const user=[];
async function userInfo(users){
    const userData=await users;
    user.push(userData);
    console.log(users);
}
async function fetchUser(){
    const response=await fetch(`${endPoint}`).catch(handleError);
    if(response.status!==200)
    {
        handleError(response.statusText);
    }else{
        const data=await response.json();
        console.log(data);
        userInfo(data);
    }
}
function handleError(err){
    console.log("oh no!!");
    console.log(err);
}