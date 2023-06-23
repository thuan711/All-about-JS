const num1 = 1;
const num2 = 1;
console.log(num1 == num2);

const arr1 = [1,2];
const arr2 = [1,2];
console.log(arr1 == arr2);

// JSON
console.log(JSON.stringify([1,2,3]));
console.log(JSON.parse("[1,2,3]"));
const arr1str = JSON.stringify(arr1);
const arr2str = JSON.stringify(arr2);
console.log(arr1str == arr2str);

const st = ["a","b","c","d","e","f","g","h","i"];
const sliceST = st.slice();
sliceST.pop();
console.log(st);
const spreadST = [...st];
console.log(spreadST);
const [x,y,z] = st;
console.log(x,y,z);
const [a, ...rest] = st; // phần còn lại
console.log(rest);