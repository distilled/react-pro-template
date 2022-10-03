class DateUtil {
  private readonly _date: Date = new Date();

  public get now() {
    return this._date.toLocaleDateString();
  }
}

export { DateUtil };
export default new DateUtil();
