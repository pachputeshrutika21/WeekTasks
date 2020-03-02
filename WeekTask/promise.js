const user1=[];
function fetchPromise(){
    const   Promise=fetch("https://api.github.com/users");
    Promise.then(response=>{
        const data=response.json();
        console.log(data);
        data.then(res1=>{
            user1.push(res1);
            console.log(user1);
        });
    }).catch(handleError);
}
function handleError(err){
    console.log("oh no!!");
    console.log(err);
}