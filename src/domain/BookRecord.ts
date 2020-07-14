export default class BookRecord {
  public startReadingDate: Date;
  public title: string;
  public author: string;
  constructor (startReadingDate: Date, title: string, author: string) {
    this.startReadingDate = startReadingDate
    this.title = title
    this.author = author
  }
}
