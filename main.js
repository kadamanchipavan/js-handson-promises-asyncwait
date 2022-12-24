//1Q

function call (name) {
    console.log("Hii ",name);
}
  
function Func(calling) {
    calling("pavan");
}
Func(call)
//2Q
function calltime(){
   setTimeout(()=>{
    console.log("1");
    setTimeout(()=>{
        console.log("2");
        setTimeout(()=>{
            console.log("3");
            setTimeout(()=>{
                console.log("4");
                setTimeout(()=>{
                    console.log("5");
                    setTimeout(()=>{
                        console.log("6")
                        setTimeout(()=>{
                            console.log("7")
                        },7000)
                    },6000)
                   },5000)
            },4000)
           },3000)
    },2000)
   },1000)
}
calltime()
//3Q
let counter = 0;
function timeOut(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(++counter);
        },  1000 * i)
    });
}
for (let i = 1; i <= 7; i++) {
    timeOut(i).then((x) => console.log( x))
}
//4Q

let x = function(condition){
    return new Promise((resolve, reject)=>{
        if(condition == 'yes'){
            resolve('promise resolved')
        }
        else{
            reject('promise rejected')
        }
    })
}

x('yes').then(response => console.log(response)).catch(err=>console.log(err))


//5Q
function add(array) {
    let sum = 0;
    for(let i of array) {
        sum += i;
    }
    console.log("Sum of array element is ",sum);
}
function arr(callback) {
        callback([1,2,3,4,5]);
}
arr(add);
//6Q
function callbackHell(){
    setTimeout(() => {
        console.log("Value 1");
        setTimeout(() => {
            console.log("Value 2");
            setTimeout(() => {
               console.log("Value 3");
               setTimeout(() => {
                   console.log("Value 4");
               },4000);
            },3000);
        },2000);
    },1000);
}
// callbackHell()
//7Q
let message = (num) => {
    return new Promise((res, rej) => {
        if(num){
            res(num())
        }
        else{
            rej(console.log("No Data"))
        }

    })
}

message(()=>console.log("Message is printed"))
.then(()=>{
    prntdata(()=>console.log("Promise Functon"))
})
.catch(()=>console.log("No Data available"))
//8Q
let vari=5;
console.log(vari);
add1();
console.log("Hello");
function add1(){
    setTimeout(()=>{
        console.log("Async Await Called");

    }, 2000)
}
//9Q
const fun1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    },1000);
  });
  const fun2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2000);
  });
  const fun3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3000);
  });
  
  Promise.all([fun1, fun2, fun3]).then((results) => {
    const total = results.reduce((p, c) => p + c);
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  });