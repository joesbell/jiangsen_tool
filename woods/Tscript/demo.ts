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

// interface api {
//   filter: {
//     [key: string]: string;
//   };
//   pageNum: number;
//   pageSize: number;
// }
// function x({ filter, pageNum, pageSize }: api) {
//   // console.log(filter, pageNum, pageSize);
//   let ax = { ...filter, pageNum, pageSize };
//   console.log(ax);
// }
// x({
//   filter: {
//     name: 'jiangsen',
//   },
//   pageNum: 1,
//   pageSize: 10,
// });



class Single {
  private static instance: Single;
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Single('jiangsen');
    }
    return this.instance;
  }
}
const demo1 = Single.getInstance();

const demo2 = Single.getInstance();
console.log(demo1 === demo2);

