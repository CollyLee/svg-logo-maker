// SHAPE CLASSES
class Shape {
      constructor(svgOpen, svgText, svgClose) {
            this.svgOpen = svgHeader;
            this.svgText = svgText;
            this.svgFooter = svgClose
      }
}

class Triangle extends Shape {
      constructor(svgOpen, svgShape, svgText, svgClose) {
            super(svgOpen, svgText, svgClose);
            this.svgShape = svgShape
      }
}

class Circle extends Shape {
      constructor(svgOpen, svgShape, svgText, svgClose) {
            super(svgOpen, svgText, svgClose);
            this.svgShape = svgShape
      }
}

class Square extends Shape {
      constructor(svgOpen, svgShape, svgText, svgClose) {
            super(svgOpen, svgText, svgClose);
            this.svgShape = svgShape
      }
}

// FUNCTION THAT CREATES THE SHAPE CODE BASED ON USER RESPONSES
const createShape = function (data) {

      const openCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
      const textCode = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoChars}</text>`;
      const closeCode = `</svg>`

      const triangleCode = `<polygon points="180 45 180" stroke= color fill= "${data.shapeColor}" stroke-width= "1" />`
      const circleCode = `<circle cx="25" cy="75" r="100" stroke= "${data.shapeColor}" fill= "${data.shapeColor}" stroke-width="1" />`
      const squareCode = `<rect x="10" y="10" width="300" height="200" stroke="${data.shapeColor}" fill="${data.shapeColor}" stroke-width="1" />`


      switch (`${data.logoShape}`) {

            case triangle:
                  logo = new Triangle(
                        openCode,
                        triangleCode,
                        textCode,
                        closeCode
                  );
                  break;

            case circle:
                  logo = new Circle(
                        openCode,
                        circleCode,
                        textCode,
                        closeCode
                  );
                  break;

            case square:
                  logo = new Square(
                        openCode,
                        squareCode,
                        textCode,
                        closeCode
                  );
                  break;

      } return createShape
}