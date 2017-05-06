import {Animal, Config} from "./animal";
/**
 * Created by khjan on 2017-05-06.
 */

abstract class Factory{
    create(){
        return this.createAnimal(new Config());
    }
    abstract createAnimal(Config) : Animal;
}

export class AnimalFactory extends Factory{
    createAnimal(config : Config){
        config.bark = "야옹야옹";
        config.name = "고양이";
        return new Animal(config);
    }
}

export function mainFactory() : Animal{
    let myAnimal : Animal = (new AnimalFactory()).create();
    return myAnimal
}
