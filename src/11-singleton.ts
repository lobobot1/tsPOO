export class MyService {
  private static instance: MyService | null = null;

  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if(MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create("myService1");

const myService2 = new MyService("myService2");
