//7 Kyu
// Adapted from here, with less terrible instructions and a couple tweaks.

// Two kangaroos are jumping on a line. They start out at different points on the line, and jump in the same direction at different speeds. Your task is to determine whether or not they'll ever land in the same spot at the same time (you'll just have to suspend disbelief for a moment and accept that two kangaroos, for the purpose of this kata, can occupy the same space at the same time :)

// Your function is given four arguments (kanga1, rate1, kanga2, rate2); the first kangaroo's starting point, the first kangaroo's speed, the second kangaroo's starting point, and the second kangaroo's speed.

// Return true if the above conditions are met, else false. Starting location and speed may vary wildly. The first kangaroo will usually start behind the second one and travel faster, but not always. Starting locations may be negative, but speeds will always be > 0.

// Example:

// kangaroo(kanga1 = 0, speed1 = 3, kanga2 = 4, speed2 = 2)=> true //they meet on their fourth jump

function kangaroo(kanga1, rate1, kanga2, rate2) {
  // Avoid division by zero (same rate)
  if (rate1 === rate2) {
    // If they start at the same place, they meet every time
    return kanga1 === kanga2;
  }

  const t = (kanga2 - kanga1) / (rate1 - rate2);

  // They meet if t is a positive whole number
  return t >= 0 && Number.isInteger(t);
}
