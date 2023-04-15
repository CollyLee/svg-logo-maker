// example logo 
{/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}


// shape should be 300x200px

// CLASS SHAPE

// CLASS TRIANGLE (need to revisit polygon points)
{/* <polygon points="180 45 180"
      stroke="${shapeColor}" fill="${shapeColor}" stroke-width="1"/> */}

// CLASS CIRCLE
{/* <circle cx="25" cy="75" r="100" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="1"/> */ }
// 

// CLASS SQUARE
{/* <rect x="10" y="10" width="300" height="200" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="1"/> */ }

const createShape = function (data) {

      switch (`${data.logoShape}`) {

            case triangle:
                  logoShape = `<polygon points="180 45 180" stroke= color fill= "${data.shapeColor}" stroke-width= "1" />`;
                  break;

            case circle:
                  logoShape = `<circle cx="25" cy="75" r="100" stroke= "${data.shapeColor}" fill= "${data.shapeColor}" stroke-width="1" />`;
                  break;

            case square:
                  logoShape = `<rect x="10" y="10" width="300" height="200" stroke="${data.shapeColor}" fill="${data.shapeColor}" stroke-width="1" />`;
                  break;

      }
{/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text> */}

}