export default class Rectangle {
  constructor(dim) {
    this.dim = dim;
  }
  isVerticallyCentered(other) {
    return (
      (this.dim.y * 2 + this.dim.height) / 2 ===
      (other.dim.y * 2 + other.dim.height) / 2
    );
  }

  centerY() {
    return (this.dim.y * 2 + this.dim.height) / 2;
  }
}
