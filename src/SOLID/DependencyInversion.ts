//Объектом зависимости должна быть абстракция, а не что-то конкретное.

interface Connection {
  request: (url: string, opts:any) => void;
}

class Http {
  constructor(private httpConnection: Connection) { }
  get(url: string , options: any) {
      this.httpConnection.request(url,'GET');
  }
  post(url: string) {
      this.httpConnection.request(url,'POST');
  }
  //...
}
