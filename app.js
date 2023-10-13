const apple = 
{
    name:"apple",
    delicious:"very",
    healthy:true,
    sweet:true,
    round:true,
    siblings:["peach", "pear"],
    }
const pomegranate =
{
    name:"pomegranate",
    delicious:NaN,
    healthy:true,
    sweet:false,
    round:true,
    siblings:["guava"],
    }
const banana =
{
    name:"banana",
    delicious:true,
    healthy:true,
    sweet:true,
    round:false,
    siblings:["plaintain"],
    }
const lemon =
{
    name:"lemon",
    delicious:false,
    healthy:true,
    sweet:false,
    round:true,
    siblings:["lime","orange"],
    }

let fruits = [apple, pomegranate, banana, lemon];
fruits.forEach((fruit) => console.log(fruit.name));
fruits.forEach((fruit)=>console.log(fruit.name,fruit.siblings,fruit.delicious,fruit.healthy,fruit.sweet,fruit.round));
// const good = fruits.filter(fruit => {
//   return fruit.delicious.includes("true");
// });
