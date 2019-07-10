export class RandomNumber {
  getValue() {
    return Math.random();
  }
  setValue(v: number) {
    console.warn("You can't set value to RandomNumber");
  }
}

export class A {
  get prop(this: RandomNumber) {
    return this.getValue();
  }
  set prop(this: RandomNumber, v: number) {
    this.setValue(v);
  }
}
