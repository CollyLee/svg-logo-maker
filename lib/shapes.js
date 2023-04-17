let shapeString = ``

// SHAPE CLASSES

class Shape {
      constructor(svgOpen, svgText, svgClose) {
            this.svgOpen = svgOpen;
            this.svgText = svgText;
            this.svgClose = svgClose;
      }
}

class Triangle extends Shape {
      constructor(svgOpen, svgShape, svgText, svgClose) {
            super(svgOpen, svgText, svgClose);
            this.svgShape = svgShape;
            this.renderShape = function () {
                  shapeString = shapeString + this.svgOpen + this.svgShape + this.svgText + this.svgClose;
                  return shapeString
            }
      }
}

class Circle extends Shape {
      constructor(svgOpen, svgShape, svgText, svgClose) {
            super(svgOpen, svgText, svgClose);
            this.svgShape = svgShape;
            this.renderShape = function () {
                  shapeString = shapeString + this.svgOpen + this.svgShape + this.svgText + this.svgClose;
                  return shapeString
            }
      }
}

class Square extends Shape {
      constructor(svgOpen, svgShape, svgText, svgClose) {
            super(svgOpen, svgText, svgClose);
            this.svgShape = svgShape;
            this.renderShape = function () {
                  shapeString = shapeString + this.svgOpen + this.svgShape + this.svgText + this.svgClose;
                  return shapeString
            }
      }
}

module.exports = Shape;
module.exports = Triangle;
module.exports = Circle;
module.exports = Square;