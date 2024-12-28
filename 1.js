//1
// const obj = {};
// obj.id = 1;
// obj.name = 'udemy';
// obj.name = 'hschool';
// delete obj.name;
// console.log(obj)

// 2
// const obj = {"1": "a", "2": "b", "name": "c"};
// let arr = [];
// for (key in obj)
// {
//     if (!isNaN(key))
//         arr.push(key)
// }
// console.log(arr);

// 3
// const obj = {"a": 1, "b": "2", "c": 3};
// let arr = [];
// for (key in obj)
// {
//     if (!isNaN(obj[key]))
//         arr.push(Number(obj[key]))
// }
// console.log(arr);

// 4
// const obj = {"a": 1, "b": 2, "c": 4};
// let arr = [];
// for (key in obj)
// {
//     if (obj[key]%2==0)
//         arr.push(Number(obj[key]))
// }
// console.log(arr);

// 5
// Входные: {"1": "a", "3": "b", "4": "c"} → Результат: ["1", "3"]
// const obj = {"1": "a", "3": "b", "4": "c"};
// let arr = [];
// for (key in obj)
// {
//     if (key%2!=0)
//         arr.push(Number(key))
// }
// console.log(arr);

// 6
// const obj = {"x": 5, "y": 10, "z": "abc"};
// for (key in obj)
// {
//     if (!isNaN(obj[key]))
//         obj[key]= obj[key]*2
// }
// console.log(obj);

// 7
// const obj = {}; 
// let count = 0
// for(key in obj){
//     count++
// }
// if(count === 0) console.log(false)
// else console.log(true)

// 8
// const obj =  {"a": 1, "b": 2, "c": 3};
// let count = 0;
// for (key in obj)
// {
//     count++
// }
// console.log(count)

// 9
// const obj =  {"a": 1, "b": 'ada', "c": 3};
// let count = 0;
// for (key in obj)
// {
//     if(!isNaN(obj[key]))
//         count++
// }
// console.log(count)

// 10
// const obj = {
//     name : '',
//     age : '',
//     birthday: ''
// }
// const a = prompt('Введите имя')
// if(isNaN(a))
//     obj.name = a
// else
//     console.log('Неверное имя')
// const b = prompt('Введите возраст')
// if(!isNaN(b) && b > 0)
//     obj.age = b
// else
// {
//     console.log('Неверный возраст');
// }
// const c = prompt('Введите дату рождения')
// if(c != '')
//     obj.birthday = c
// else
// {
//     console.log('Введите дату рождения');
// }

// 11
// const obj = {}
// const a = Number(prompt('Введите'))
// const b = Number(prompt('Введите'))
// obj.avg = (a + b)/2
// console.log(obj)

// 12
// const obj = {}
// const n = Number(prompt('Введите количество'))
// let arr = []
// for(let i = 0; i < n; i++){
//     let a = prompt('Введите число')
//     if(isNaN(a)){
//         console.log('Введите число')
//         break
//     }
//     else
//         arr.push(Number(a))
// }
// const result = arr.reduce(function(sum, elem){
//     return sum+=elem
// }, 0)
// obj.sum = result
// console.log(obj)

// 13
// const a = [1, 2, 3, 4, 5];
// const obj = {}
// for(let i = 0; i < a.length; i++){
//     if(a[i] % 2 == 0)
//         obj[a[i]] = true
//     else
//         obj[a[i]] = false
// }
// console.log(obj)

// 14
// const arr = [5, 5, 6, 6, 6, 7];
// const arr1=[];
// const obj={};
// for(let i = 0; i < arr.length; i++){
//     if(!arr1.includes(arr[i]))
//         arr1.push(arr[i]);
// }
// for(let i = 0; i < arr1.length; i++){
//     let count = 0;
//     for(let j = 0; j < arr.length; j++){ 
//         if(arr1[i]===arr[j])
//             count++;
//     }
//     obj[arr1[i]] = count
// }
// let max = 0;
// for(key in obj)
// {
//     if(obj[key]>max)
//         max = obj[key]
// }
// for(key in obj)
// {
//     if(obj[key]==max)
//         console.log(key)
// }