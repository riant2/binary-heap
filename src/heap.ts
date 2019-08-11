export class OneBasedArray<T> {
  private contents: T[] = [];

  get length() {
    return this.contents.length;
  }

  get = (position: number) => this.contents[position - 1];

  pop = () => this.contents.pop();

  set = (position: number, object: T) => (this.contents[position - 1] = object);
}
