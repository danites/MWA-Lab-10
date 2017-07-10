
class BaseClass { 
constructor(public width:number,public length:number){ } 
   calSize(){ return this.width* this.length; 
   } 
} 

var rectangle=new BaseClass(5,2); 
console.log(rectangle.calSize());

