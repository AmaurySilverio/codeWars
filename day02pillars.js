// DAY 2

// There are pillars near the road. The distance between the pillars is the
// same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters
// (without the width of the first and last pillar).

pillars = (numPill, dist, width) => {
  if (numPill === 1) {
    return 0;
  } else {
    let wholeDist = (numPill - 1) * (dist * 100) + numPill * width - width * 2;
    return wholeDist;
  }
};

// CODE I USED TO SOLVE PROBLEM, ABOVE IS REFRACTORED/CLEANER
// function pillars(numPill, dist, width) { //11 15 30
//   if (numPill === 1 ){
//     return 0
//   } else {
//   let totalWidth = numPill * width; //width of all pillars - 330
//   let totalDist = (numPill-1) * dist; //total distance between pillars -165
//   let wholeDist = totalWidth + (totalDist * 100) // 1980
//   wholeDist = wholeDist - (width * 2) // 1920
//   return wholeDist;
//   }
// }
