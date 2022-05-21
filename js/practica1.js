function myFunc (theObject){
    theObject.make ='Toyota'
}
var x,y:
var myCar = {make: 'Honda', model:'Accord', year: 1998}:
x= myCar.make:

console.console.log("El valor de x",x);
myFunc(myCar)

//ejercicio2

const square = function(number){return number*number}
const square2 = number => number * number;

let a = square(4);
let b = square2(8);

console.log("El resultado de a ",a)
console.log("El resultado de a ",b)
 task_names3 = tasks.map(function(task,index,array){
    return task.name;
})
console.log(task_names3)
//ejercicio3
//Duration are in minutes

const tasks = [
    {'name' :   'Write for evento Tuts',
      'duration': 120},
      {'name' :   'Work out',
      'duration': 60},
      {'name' :   'Procrastantine on Duolingo',
      'duration': 240}
];
const task_names =[];
for (let i =0, max = tasks.length;i< max; i += 1){
    task_names.push(tasks[i].name)
}

console.log(task_names)

//ejercicio4
const tasks2 = [
    {'name' :   'Write for evento Tuts',
      'duration': 120},
      {'name' :   'Work out',
      'duration': 60},
      {'name' :   'Procrastantine on Duolingo',
      'duration': 240}
];
const task_names2 =[];
tasks2.forEach(task =>{}
    