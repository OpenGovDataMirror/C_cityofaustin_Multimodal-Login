// (1-D Gaussian function) x (first-order derivative of 1-D Gaussian function)
// Directional line detector in 0 direction
export const H1_0 =
[
  [ 0.0009, 0.0027, 0.0058, 0.0092, 0.0107, 0.0092, 0.0058, 0.0027, 0.0009 ],
  [ 0.0065, 0.0191, 0.0412, 0.0655, 0.0764, 0.0655, 0.0412, 0.0191, 0.0065 ],
  [ 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000 ],
  [ -0.0009, -0.0027, -0.0058, -0.0092, -0.0107, -0.0092, -0.0058, -0.0027, -0.0009 ],
  [ -0.0065, -0.0191, -0.0412, -0.0655, -0.0764, -0.0655, -0.0412, -0.0191, -0.0065 ]
];
// Directional line detector in 45 direction
export const H1_45 =
[
  [ -0.000900, -0.006500, 0.000000, 0.006500, 0.000900, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, -0.002700, -0.019100, 0.000000, 0.019100, 0.002700, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, -0.005800, -0.041200, 0.000000, 0.041200, 0.005800, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, -0.009200, -0.065500, 0.000000, 0.065500, 0.009200, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, -0.010700, -0.076400, 0.000000, 0.076400, 0.010700, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, -0.009200, -0.065500, 0.000000, 0.065500, 0.009200, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, -0.005800, -0.041200, 0.000000, 0.041200, 0.005800, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, -0.002700, -0.019100, 0.000000, 0.019100, 0.002700, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, -0.000900, -0.006500, 0.000000, 0.006500, 0.000900 ]
];
// Directional line detector in 90 direction
export const H1_90 =
[
  [ -0.000900, -0.006500, 0.0, 0.006500, 0.000900 ],
  [ -0.002700, -0.019100, 0.0, 0.019100, 0.002700 ],
  [ -0.005800, -0.041200, 0.0, 0.041200, 0.005800 ],
  [ -0.009200, -0.065500, 0.0, 0.065500, 0.009200 ],
  [ -0.010700, -0.076400, 0.0, 0.076400, 0.010700 ],
  [ -0.009200, -0.065500, 0.0, 0.065500, 0.009200 ],
  [ -0.005800, -0.041200, 0.0, 0.041200, 0.005800 ],
  [ -0.002700, -0.019100, 0.0, 0.019100, 0.002700 ],
  [ -0.000900, -0.006500, 0.0, 0.006500, 0.000900 ]
];
// Directional line detector in 135 direction
export const H1_135 =
[
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, -0.000900, -0.006500, 0.000000, 0.006500, 0.000900 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, -0.002700, -0.019100, 0.000000, 0.019100, 0.002700, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, -0.005800, -0.041200, 0.000000, 0.041200, 0.005800, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, -0.009200, -0.065500, 0.000000, 0.065500, 0.009200, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, -0.010700, -0.076400, 0.000000, 0.076400, 0.010700, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, -0.009200, -0.065500, 0.000000, 0.065500, 0.009200, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, -0.005800, -0.041200, 0.000000, 0.041200, 0.005800, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, -0.002700, -0.019100, 0.000000, 0.019100, 0.002700, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ -0.000900, -0.006500, 0.000000, 0.006500, 0.000900, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ]
];

// 1-D Gaussian function x second-order derivative of 1-D Gaussian function
// Directional line detector in 0 direction
export const H2_0 = [
  [ 0.0156, 0.0211, 0.0309, 0.0416, 0.0464, 0.0416, 0.0309, 0.0211, 0.0156 ],
  [ 0.0257, 0.0510, 0.0954, 0.1441, 0.1660, 0.1441, 0.0954, 0.0510, 0.0257 ],
  [ -0.0298, -0.1125, -0.2582, -0.4178, -0.4896, -0.4178, -0.2582, -0.1125, -0.0298 ],
  [ 0.0257, 0.0510, 0.0954, 0.1441, 0.1660, 0.1441, 0.0954, 0.0510, 0.0257 ],
  [ 0.0156, 0.0211, 0.0309, 0.0416, 0.0464, 0.0416, 0.0309, 0.0211, 0.0156 ]
];
// Directional line detector in 45 direction
export const H2_45 =
[
  [ 0.015600, 0.025700, -0.029800, 0.025700, 0.015600, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.021100, 0.051000, -0.112500, 0.051000, 0.021100, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.030900, 0.095400, -0.258200, 0.095400, 0.030900, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.041600, 0.144100, -0.417800, 0.144100, 0.041600, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.046400, 0.166000, -0.489600, 0.166000, 0.046400, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.041600, 0.144100, -0.417800, 0.144100, 0.041600, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.030900, 0.095400, -0.258200, 0.095400, 0.030900, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.021100, 0.051000, -0.112500, 0.051000, 0.021100, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.015600, 0.025700, -0.029800, 0.025700, 0.015600 ]
];
// Directional line detector in 90 direction
export const H2_90 =
[
  [ 0.015600, 0.025700, -0.029800, 0.025700, 0.015600 ],
  [ 0.021100, 0.051000, -0.112500, 0.051000, 0.021100 ],
  [ 0.030900, 0.095400, -0.258200, 0.095400, 0.030900 ],
  [ 0.041600, 0.144100, -0.417800, 0.144100, 0.041600 ],
  [ 0.046400, 0.166000, -0.489600, 0.166000, 0.046400 ],
  [ 0.041600, 0.144100, -0.417800, 0.144100, 0.041600 ],
  [ 0.030900, 0.095400, -0.258200, 0.095400, 0.030900 ],
  [ 0.021100, 0.051000, -0.112500, 0.051000, 0.021100 ],
  [ 0.015600, 0.025700, -0.029800, 0.025700, 0.015600 ]
];
// Directional line detector in 135 direction
export const H2_135 =
[
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.015600, 0.025700, -0.029800, 0.025700, 0.015600 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.021100, 0.051000, -0.112500, 0.051000, 0.021100, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.030900, 0.095400, -0.258200, 0.095400, 0.030900, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.041600, 0.144100, -0.417800, 0.144100, 0.041600, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.000000, 0.046400, 0.166000, -0.489600, 0.166000, 0.046400, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.000000, 0.041600, 0.144100, -0.417800, 0.144100, 0.041600, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.000000, 0.030900, 0.095400, -0.258200, 0.095400, 0.030900, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.000000, 0.021100, 0.051000, -0.112500, 0.051000, 0.021100, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ],
  [ 0.015600, 0.025700, -0.029800, 0.025700, 0.015600, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000 ]
];