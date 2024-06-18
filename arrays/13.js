/**
 * Double the number of likes on each video on a video-sharing app.
 * @param {number[]} likes - The array of likes on videos.
 * @returns {number[]} The new array of likes doubled.
 * @example
 * doubleLikes([100, 200, 300]); // returns [200, 400, 600]
 */
export function doubleLikes(likes) {
  // TODO: Use the map() method to double each like count
  // TODO: Return the new array with doubled likes
  return likes.map(like => like * 2)
}
