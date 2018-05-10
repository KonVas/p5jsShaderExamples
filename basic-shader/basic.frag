// webgl requires that the first line of the fragment shader specify the precision
// precision is dependent on device, but higher precision variables have more zeros
// sometimes you'll see bugs if you use lowp so stick to mediump or highp
precision mediump float;

// the fragment shader has one main function too
// this is kinda of like the draw() function in p5
// main outputs a variable called gl_FragColor which will contain all the colors of our shader
void main() {

  // lets just send the color red out
  // colors in shaders go from 0.0 to 1.0
  // glsl is very finicky about the decimal points 
  // gl_FragColor is a vec4 and is expecting red, green, blue, alpha
  // the line below will make a solid red color for every pixel, with full alpha
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0 );
}