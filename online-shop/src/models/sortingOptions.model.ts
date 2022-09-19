import IPreloadedCard from "../Interfaces/PreloadedCard.interface";

interface ISortingOptions {
    [key:string] : (a:IPreloadedCard, b:IPreloadedCard)=> number
}

const sortingOptions:ISortingOptions = {
    'cost asc' : (a, b) => {
        const aCost=a.cost;
        const bCost=b.cost;
        return aCost-bCost;
    },
    'cost desc' : (a, b) => {
        const aCost=a.cost;
        const bCost=b.cost;
        return bCost-aCost;
    },
    'attack asc' : (a,b) => {
        const aAttack=a.attack;
        const bAttack=b.attack;
        return aAttack-bAttack;
    },
    'attack desc' : (a,b) => {
        const aAttack=a.attack;
        const bAttack=b.attack;
        return bAttack-aAttack;
    },
    'hp asc' : (a,b) => {
        const aHP=a.health;
        const bHP=b.health;
        return aHP-bHP;
    },
    'hp desc' : (a,b) => {
        const aHP=a.health;
        const bHP=b.health;
        return bHP-aHP;
    },
};

export default sortingOptions;