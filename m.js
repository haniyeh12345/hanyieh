let password="ADMin123@#";
let upper=password.match(/[A-Z]/g);
let regex=password.match(/[\W_]/);
   if(upper.length < 3){
    console.log("password is weak");
   }
   if(password.includes(123)){
    console.log("password is invalid");
   }
   if(!regex){
    console.log("password is not character special");
   }