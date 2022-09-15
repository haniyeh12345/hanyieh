let userinfo={
    username:"laptop lenovo",
    price:105000000,
    sale : 70 ,
    discount : function(d){
       return this.price - (this.price*d)/100
    },
}

console.log(userinfo.discount(10));