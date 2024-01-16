export interface Driver {
  database: string;
  password: string;
  port: number;
  connect(): void;
}

const driver: Driver = {
  database: "mydb",
  password: "mypassword",
  port: 3306,
  connect: () => {
    console.log("Connecting to MySQL...");
  },
};

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    console.log("Connecting to Postgres...");
  }
}
