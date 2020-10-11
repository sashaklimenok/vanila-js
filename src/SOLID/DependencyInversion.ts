// The dependency object should be an abstraction, not something specific.

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
