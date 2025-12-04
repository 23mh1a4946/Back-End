function getUserDetails(ID,getUserSubjects){
    console.log("getting userdetails by user id",ID);  // API CALL
    getUserSubjects({userRoll:"6789"})
}
function getUserSubjects(userRoll,getUserMarks){
    console.log("getting subjects by userroll" ,userRoll);  // API CALL
    getUserMarks({userSubid:"en-1"})
}
function getUserMarks(userSubid){
    console.log("getting marks by subject ID",userSubid);
}
getUserDetails("1234",function(userRoll){
    getUserSubjects(userRoll,function(userSubid){
        getUserMarks(userSubid)
    })
})