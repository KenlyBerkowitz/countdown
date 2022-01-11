
function daysBetween(lateDate, earlyDate) {
  return Math.floor((lateDate - earlyDate) / (1000 * 60 * 60 * 24));
}
export default daysBetween;