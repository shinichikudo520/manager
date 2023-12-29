export default abstract class Manager<T> {
  /** 实例管理 */
  private map = new Map<string | number, T>();
  private _items = new Array<T>();
  protected addList = new Set<string | number>();
  protected delList = new Set<string | number>();
  protected get items(): Array<T> {
    return this._items;
  }
  protected set items(value: Array<T>) {
    this._items = value;
  }
  add(key: string | number, model: T): T {
    this.map.set(key, model);
    this.addList.add(key);
    this.delList.delete(key);
    return model;
  }
  del(key: string | number) {
    this.map.delete(key);
    this.delList.add(key);
    this.addList.delete(key);
  }

  get(key: string | number): T | undefined {
    return this.map.get(key);
  }

  getAll(): Array<T> {
    const items = new Array<T>(this.map.size);
    const values = this.map.values();
    let i = 0;
    for (const item of values) {
      items[i] = item;
      i++;
    }
    return items;
  }

  iterator(cb: (item: T, key?: string | number) => void) {
    this.map.forEach(cb);
  }
  clear() {
    this.items.length = 0;
    this.map.clear();
    this.addList.clear();
    this.delList.clear();
  }
}
