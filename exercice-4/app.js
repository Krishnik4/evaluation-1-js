class Human{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
}
const donald=new Human('Donald','Duck');
console.log(`Bonjour ${donald.firstName} ${donald.lastName}`);

class Child extends Human{
    constructor(firstName,lastName){
        super(firstName,lastName);
        this.child=true;
    }
    play(){
        console.log(`Je m'appelle ${this.firstName} et je suis en train de jouer.`);
    }
}
const riri=new Child('Riri','Duck');
if(riri.child){
    riri.play();
}