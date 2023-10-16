const fruits=[
    apple = 
{
    name:"apple",
    delicious:"good",
    healthy:"super healthy",
    sweet:"very sweet",
    round:"roundish",
    siblings:["peach", "pear"],
    },
pomegranate =
{
    name:"pomegranate",
    delicious:"idk if it's great",
    healthy:"healthy",
    sweet:"sometimes sweet",
    round:"roundish",
    siblings:["guava"],
    },
banana =
{
    name:"banana",
    delicious:"good",
    healthy:"healthy",
    sweet:"sweet",
    round:"crescent",
    siblings:["plantain"],
    },
lemon =
{
    name:'lemon',
    delicious:"nasty",
    healthy:"decently healthy",
    sweet:"sour",
    siblings:["lime","orange"],
    }
]
fruits.forEach((fruit) => console.log(fruit.name));
fruits.forEach((fruit) => fruit.siblings.forEach((siblings) => console.log(siblings)));
fruits.forEach((fruit) => console.log(fruit.delicious));
fruits.forEach((fruit) => console.log(fruit.healthy));
fruits.forEach((fruit) => console.log(fruit.sweet));

const mid = fruits.filter((fruit) => fruit.delicious !== "good")
console.log(mid)

