import DatabaseConnection from "./DatabaseConnection";

export default class ConnectionPool {
  private pool: DatabaseConnection[] = [];
  private used: DatabaseConnection[] = [];
  private nextId: number = 1;

  constructor(private maxConnections: number) {}

  acquire(): DatabaseConnection | null {
    if (this.pool.length > 0) {
      const connection = this.pool.pop() || null;
      this.used.push(connection!);
      console.log(`Connection ${connection!["id"]} acquired from pool`);
      return connection;
    }
    if (this.used.length < this.maxConnections) {
      const connection = new DatabaseConnection(this.nextId++);
      this.used.push(connection);
      return connection;
    }

    console.log("No available connections, please wait");
    return null;
  }

  release(connection: DatabaseConnection): void {
    const index = this.used.indexOf(connection);
    if (index !== -1) {
      this.used.splice(index, 1);
      this.pool.push(connection);
      console.log(`Connection ${connection["id"]} returned to pool`);
    }
  }
}
