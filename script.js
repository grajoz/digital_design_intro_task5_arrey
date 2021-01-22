let arr = new Array(5);
let arrHelp = [];

function fillArray() {
	for (let i = 0; i<arr.length;i++) {
        arr[i]=Math.round(Math.random()*200)-100;
    };
};

fillArray()
console.log('Заполняем массив рандомными целыми числами (от -100 до 100)')
console.log(arr)


function replaceFromArray () {
	for (let i = 0; i<arr.length;i++) {

        if (arr[i] < 0) {
            arr[i] = 0
        };
    };
};

replaceFromArray ();
console.log('Заменяем все отрицательные числа нулем');
console.log(arr);

function addToArray() {
    for (let i = 0; i<arr.length;i++) {
        arrHelp.push(arr[i]);
        if (arr[i] === 0 && i % 2 === 0) {
            arrHelp.push(-1);
        };
    };
    arr = arrHelp;
};

addToArray();
console.log('После каждого элемента с четным индексом, который равен нулю, вставляем элемент равный -1');
console.log(arr)