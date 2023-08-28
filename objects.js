class Human {
    contructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(this.name + "speak");
    }
}


class Man extends Human {
    talk(){
        console.log(this.name +""+ "speaks");

    
    }
};
let codetrainAmish = new Man('Amish', 70);
codetrainAmish.talk();