// let obj={
//     a:1,
//     b:"Harry"
// }

// console.log(obj)

// let animal={
//     eats:true
// };

// let rabbit={
//     jumps:true
// };

// rabbit.__proto__=animal; //sets rabbit.[[prototype]]=animal


class Animal{
    constructor(name){
        this.name=name
        console.log("Object is created..."); 
    }

    eats(){
        console.log("kha raha hoon")
    }

    jumps(){
        console.log("khudh raha hoon")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name=name
        console.log("Object is created and i am a lion.."); 
    }

    eats(){
        super.eats()
        console.log("kha raha hoon roar")
    }
}

let a=new Animal("Bunny");
console.log(a)

let i=new Lion("Shera")
console.log(i);
