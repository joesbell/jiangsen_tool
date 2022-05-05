# 接口
*当出现重复的数据类型集合结构，就可以用接口的形式统一表示。*
```
interface Person{
  name:string
}
const getPersonName = (person: Person) => {
  console.log(person.name);
};
const setPersonName = (person: Person) => {
  return person.name;
};

```
----
## 接口和类型别名的区别 在不部分情况是是差不多的。ts首先推荐用接口的形式表示。
```
type Person2={
  name:string
}
```
*但是类型别名可以直接单独类型的表示，接口只能以对象的形式*
`type Person1=string`
----
## 当接口中的某个属性可有可无时候，可以用
```
interface Person{
  name:string,
  age?:number
}
```
## 允许接口定义的属性可以随意配置，多出任何属性都可以。
```
interface Person {
  name:string,
  [key:string]:any//任意属性

}
getPersonName({name:'234',age:244})
```
----

## 让一个类去应用一个接口
```
interface Person {
  name: string;
  say(): string; //函数
}
class person implements Person {
  name = 'jiangse';
  say() {
    return 'hellowrold';
  }
}

```
## 接口的继承
```
interface Son extends Person {
  son(): string;
}
class son implements Son {
  name = 'hello';
  son() {
    return 'hshle';
  }
  say() {
    return 'hahaha';
  }
}
interface arrTy {
  pre: number[];
  cur: number;
}
```
