//Classes

class Human{
    //properties
    age =21;
    #wt=55;
    ht=183;

    constructer(newAge,newHeight,newWt){
       this.age=newAge;
       this.ht=newHeight;
       this.#wt=newWt
    }
    //behaviour
    walking(){
        console.log("I`m Walking");
    }
    runningg(){
        console.log("I am runninng");
    }
    get fetchweight(){
        return this.#wt
    }
    set modifyweight(val){
        this.#wt=val;
    }
}
let obj= new Human(65,546,567);

console.log(obj.age);
console.log(obj.ht);
console.log(obj.fetchweight);

obj.walking();