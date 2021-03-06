# 运算符

运算符（operator)也称操作符，是用于实现赋值，比较和执行算数运算等功能的符号。

## 1、算数运算符

除了+，-，*，/外，还有%取余（取模）

```js
 9 % 2 = 1
```

- '+'在字符串运算中，会变成拼接字符串
- 浮点数的运算精度很可能得到一个不准确的结果。

**由数字、运算符、变量等组成的式子称为表达式，表达式最终都有一个结果，称为返回值**

```
 1 + 1 = 2；//2是返回值
```

## 2、自增自减

`a++`和`++a`

- 无论是哪一种都会使原变量自增1
- 不同的是`a++`和`a++`的值不同，`a++`的是原值，`++a`是新值

````js
var a = 1;
a = a++;//a=1
a = ++a;//a=2
````

`a--`和`--a`

- 无论是哪一种都会使原变量自减1
- 不同的是`a--`和`--a`的值不同，`a--`的是原值，`--a`是新值

## 3、关系运算符

关系运算符（比较运算符）有大于、小于、全等、不等。会对两个数据进行比较，关系成立则返回`true`，不成立则返回`false`

- 对于非数值的关系运算，会将其转换成数字
- `NaN`和任何值比较都是false
- 如果符号两侧的值都是字符串，不会将其转换成数字进行比较，而是分别比较字符串的字符的Unicode编码
- 比较字符编码的是一位一位的比较，如果两位一样则比较下一位
  - 这种方法可以用作字母排序
- 比较两个字符串型的数字时，一定要转型
- `\uxxxx`转义字符`\u`表示Unicode编码
- '=='相等运算符会做类型转换
  - `null==0`是false
  - `null==undefined`是true
  - NaN不和任何值相等，包括它本身

## 4、逻辑运算符

逻辑运算符用来进行布尔值运算的运算符，其返回值也是布尔值。

- `!`非 取反

### 4.1、&&

逻辑与，两边都为true，才返回true

```css
表达式1 && 表达式2
```

- 表达式1为真，返回表达式2
- 表达式1为假，返回表达式1

```
a&&alert('我出不出来')
```

此时，如果a为`false`则不再看第二个值，此时alert()语句将不会输出。

**总结：逻辑与（&&）找false，找到就输出，找不到则返回最后一个**。

### 4.2、||

逻辑或，两边都为false，才返回false

```
表达式1 || 表达式2
```

- 表达式1为真，返回表达式1
- 表达式1为假，返回表达式2

```
b||alert('我出不出来')
```

此时，如果第一个值为`true`则不再看第二个值，此时alert()语句将不会输出

**总结：逻辑或（||）找true，找到就输出，找不到则返回最后一个**。

### 4.3、!

逻辑非，取反。任意数据类型做两次非运算即可转换成Boolean类型

```js
var c = !!c
```

## 5、赋值运算符

```js
 var a = 1;
 a += 2;
 a -= 2;
 a *= 2;
 a /= 2;
 a %= 2;
```

## 6、运算符优先级

- `,`运算符可以分割多个语句，同时声明多个变量

  ```
  var a,b,c;
  var x=1,y=2,z=3;
  ```

- 与`&&`的优先级比`||`高，”假与真或“

  ```
      console.log(1 || 2 && 3);//1
      console.log(0 || 2 && 3);//3
  ```

- 遇到优先级拿不准的直接加括号`()`

