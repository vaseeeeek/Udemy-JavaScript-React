'uce strict';

class Rectangle {
    constructor(height, width) { // класс обьекта 
        this.height = height;
        this.width = width;
    }

    calcArea () { // метод возвращающий площадь
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { // создание класса ColoredRectangleWithText дочернего от Rectangle
    constructor (height, width, text, bgColor) {
        super(height, width); // забрать конструктор из класса Rectangle, super должен быть всегда первой строчкой c указанием нужных свойств
        this.text = text;
        this.bgColor = bgColor;
    }
}

const square = new Rectangle(10, 10); // создание обьекта класса Rectangle

console.log(square.calcArea());