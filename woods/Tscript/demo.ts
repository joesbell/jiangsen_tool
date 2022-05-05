// // 求长方形的对角线长度
// interface point {
//   x: number;
//   y: number;
// }
// function tsRt(data: point): number {
//   console.log('235');
//   return Math.sqrt(data.x ** 2 + data.y ** 2);
// }
// console.log(tsRt({ x: 12, y: 45 }));

// type User = {
//   [key: string]: number | string | boolean;
// };
// const objArr: User[] = [
//   {
//     name: 'jise',
//     age: 25,
//     weight: 34,
//     height: false,
//   },
// ];

// const arr = [1, 3, 5, 1, 5, 2, 31, 1, 2, 1];
// const arrRe = (arr: number[]) => {
//   let newArr = arr.reduce((pre: number[], cur: number): number[] => {
//     if (pre.indexOf(cur) === -1) {
//       pre.push(cur);
//     }
//     return pre;
//   }, []);
//   console.log(arr);

//   return newArr;
// };
// console.log(arrRe(arr));

// class Tree {
//   // 传统写法
//   // public name:string;
//   // constructor(name:string){
//   //   this.name=name;
//   // }

//   // 简化写法
//   constructor(public name: string = 'jiangsen') {
//     console.log(this.name);
//   }
// }
// const tree = new Tree();
// console.log(tree.name);

interface api {
  filter: {
    [key: string]: string;
  };
  pageNum: number;
  pageSize: number;
}
function x({ filter, pageNum, pageSize }: api) {
  // console.log(filter, pageNum, pageSize);
  let ax = { ...filter, pageNum, pageSize };
  console.log(ax);
}
x({
  filter: {
    name: 'jiangsen',
  },
  pageNum: 1,
  pageSize: 10,
});

// 泛型  泛指的类型
// 定义的时候不确定类型
function join<A>(first: A, second: A) {
  return `${first}`;
}

function joes<A, B>(fir: A, sec: B) {
  return '';
}
function arrList<T>(arr: T[]) {
  return '2344';
}
// 使用的时候再去确定类型
join<string>('1', '1');

joes<string, number>('11', 354);
joes(123, '3545'); //泛型类型推断

arrList<string>(['hello']);

// 类中的泛型
class Demo {
  constructor(private data: string[] | number[]) {}
  getItem(index: number): string | number {
    return this.data[index];
  }
}
const data = new Demo([1]);

// 运用泛型去解决复杂的联合类型的问题

// 泛型可以继承某一个接口，来固定拥有某些属性
interface Item {
  name: string;
}
class Demo1<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
  getName(index: number): string {
    return this.data[index].name;
  }
}
const data1 = new Demo1([{ name: 'hello', age: 134 }]);

// 用泛型是声明函数
function getFan<T>(param: T): string {
  return 'hello' + param;
}
getFan(133);
