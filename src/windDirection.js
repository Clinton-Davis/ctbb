export default {
  getWindDirection(direction) {
    if (direction > 349 || direction <= 12) {
      return (this.dir = "N");
    } else if (direction > 12 && direction <= 34) {
      return (this.dir = "Nne");
    } else if (direction > 34 && direction <= 56) {
      return (this.dir = "NE");
    } else if (direction > 56 && direction <= 78) {
      return (this.dir = "Ene");
    } else if (direction > 78 && direction <= 101) {
      return (this.dir = "E");
    } else if (direction > 101 && direction <= 123) {
      return (this.dir = "Ese");
    } else if (direction > 123 && direction <= 146) {
      return (this.dir = "Se");
    } else if (direction > 146 && direction <= 168) {
      return (this.dir = "Sse");
    } else if (direction > 168 && direction <= 191) {
      return (this.dir = "S");
    } else if (direction > 191 && direction <= 213) {
      return (this.dir = "Ssw");
    } else if (direction > 213 && direction <= 236) {
      return (this.dir = "Sw");
    } else if (direction > 236 && direction <= 258) {
      return (this.dir = "Wsw");
    } else if (direction > 258 && direction <= 281) {
      return (this.dir = "W");
    } else if (direction > 281 && direction <= 303) {
      return (this.dir = "Wnw");
    } else if (direction > 303 && direction <= 326) {
      return (this.dir = "Nw");
    } else if (direction > 326 && direction <= 348) {
      return (this.dir = "Nnw");
    } else {
      return (this.dir = "N");
    }
  },
};
