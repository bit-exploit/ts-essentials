export default class DatabaseConnection {
  private id: number;

  constructor(id: number) {
    this.id = id;
    console.log(`Connection ${this.id} created`);
  }

  query(sql: string): void {
    console.log(`Connection ${this.id} executing query: ${sql}`);
  }
}
