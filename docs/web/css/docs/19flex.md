# flex 布局

## 1.flex 简介

flex 弹性盒，又称伸缩盒，是 css 中又一种布局手段，它主要用来替代浮动完成页面的布局。flex 可以使元素具有弹性，让元素可以跟随页面的大小改变而改变。

- 当为父元素设置为 flex 布局后，子元素的 float、clear 和 vertical-align 属性将失效
- 伸缩布局 = 弹性布局 = 伸缩盒布局 = 弹性盒布局 = flex 布局

## 2.display:flex

采用 flex 布局的元素，称为 flex 容器（flex container），它的所有子元素自动成为容器成员，称为 flex 项目（flex item）

- 弹性容器
  - 要使用弹性盒，必须先将一个元素设置为弹性容器
  - `display:flex` 设置块级弹性容器
  - `display:inline-flex` 设置为行内的弹性容器
- 弹性元素
  - 弹性容器的**子元素**是弹性元素（弹性项），**注意是子元素不是后代元素**
  - 弹性元素可以同时是弹性容器

```css
display: flex;
```

原理：**通过给父盒子添加 flex 属性，来控制盒子的位置和排列方式**

## 3.flex 容器属性

```css
flex-direction: 设置主轴方向;
justify-content: 设置主轴上子元素的排列方式;
flex-wrap: 设置子元素是否换行;
align-content: 设置侧轴上子元素的排列方式;
(多行)align-items: 设置侧轴上子元素的排列方式;
(单行)flex-flow: 复合属性，相当于同时设置了flex-direction和flex-wrap;
```

### 3.1.flex-direction

flex-direction 属性设置主轴的方向。

在 flex 布局中，分为主轴和侧轴两个方向，也称行和列，x 轴和 y 轴

- 主轴：默认是 x 轴方向，从左向右
- 侧轴：默认是 y 轴方向，水平向下

主轴是可以变化的，flex-direction 属性可以设置谁为主轴，剩下的就是侧轴。子元素根据主轴来排列。

```css
flex-direction: row; /*默认值，从左到右*/
flex-direction: row-reverse; /*反向水平排列*/
flex-direction: column; /*从上到下*/
flex-direction: column-reverse; /*反向纵向排列*/
```

### 3.2.justify-content

justify-content 属性设置主轴上子元素的排列方式。

使用这个属性前一定要**确定好主轴是哪个**

```css
justify-content: flex-start; /*默认值，从头部开始*/
justify-content: flex-end; /*从尾部开始*/
justify-content: center; /*在主轴居中对齐*/
justify-content: space-around; /*平分剩余空间，中间空白会叠加*/
justify-content: space-between; /*先两边贴边，再平分剩余空间*/
justify-content: space-evenly; /*空白平均分布到每个元素的左右两侧*/
```

![flex](https://gitee.com/scripthqs/assets/raw/master/html/flex.png)

### 3.3.flex-wrap

flex-wrap 设置子元素是否换行

```css
flex-wrap: nowrap; /*默认值，不换行*/
flex-wrap: wrap; /*换行*/
```

### 3.4.align-items

align-items 属性设置侧轴上子元素的排列方式(单行)

```css
align-items: stretch; /*默认值，拉伸，子元素平分父元素高度或宽度*/
align-items: flex-start; /*顶部对齐*/
align-items: flex-end; /*底部对齐*/
align-items: center; /*侧轴居中*/
```

### 3.5.align-content

align-content 属性设置侧轴上的子元素的排列方式（多行），必须有 flex-wrap: wrap; 才能使用。

```css
flex-wrap: wrap; /*换行*/
align-content: stretch; /*默认值，拉伸，子元素平分父元素高度或宽度*/
align-content: flex-start; /*顶部对齐*/
align-content: flex-end; /*底部对齐*/
align-content: center; /*侧轴居中*/
align-content: space-around; /*子项在侧轴平分剩余空间*/
align-content: space-between; /*侧轴贴边，再侧轴平分剩余空间*/
align-content: space-evenly; /*平分侧轴空间*/
```

### 3.6.flex-flow

flex-flow 复合属性，相当于同时设置了 flex-direction 和 flex-wrap

```css
flex-flow: row wrap; /*主轴方向，换行*/
flex-flow: column nowrap; /*侧轴方向，不换行*/
```

## 4.flex 子项属性

- flex 子项目占的份数
- align-self 控制子项自己在侧轴的排列方式
- order 属性定义子项的排列方式

### 4.1.flex

flex 属性定义子项目**分配剩余空间**，用 flex 来表示占多少份数

```css
flex: 0; /*默认值*/
flex: 1; /*将剩余空间分成一份*/
```

### 4.2.align-self

align-self 控制子项自己在侧轴上的排列方式

align-self 属性允许单个项目有于其他项目不一样的对齐方式，可覆盖 align-items 属性。

```css
align-self: auto; /*默认值auto，表示继承父元素align-items属性，如果没有父元素，则等同于stretch*/
```

### 4.3.order

order 属性定义项目的排列顺序，数值越小，排列越靠前，默认为 0。

```css
order: 0; /*默认值*/
order: -; /*默认值*/
```
