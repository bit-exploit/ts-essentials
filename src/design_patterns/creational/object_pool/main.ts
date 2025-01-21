import ConnectionPool from "./ConnectionPool";

const pool = new ConnectionPool(3);

const conn1 = pool.acquire();
conn1?.query("SELECT * FROM users");
// Connection 1 created
// Connection 1 executing query: SELECT * FROM users

const conn2 = pool.acquire();
conn2?.query("SELECT * FROM products");
// Connection 2 created
// Connection 2 executing query: SELECT * FROM products

const conn3 = pool.acquire();
conn3?.query("SELECT * FROM orders");
// Connection 3 created
// Connection 3 executing query: SELECT * FROM orders

const conn4 = pool.acquire();
if (!conn4) console.log("No connections available");
// No available connections, please wait
// No connections available

pool.release(conn1!);
pool.release(conn2!);
// Connection 1 returned to pool
// Connection 2 returned to pool

const conn5 = pool.acquire();
conn5?.query("SELECT * FROM payments");
// Connection 2 acquired from pool
// Connection 2 executing query: SELECT * FROM payment
