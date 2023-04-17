const Shape = require('./shape')
let shapeString = ``

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

module.exports = Square;