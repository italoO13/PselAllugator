import * as express from "express";


class App {
  public app: express.Express;
  constructor() {
    this.app = express()
    this.config()
    this.app.get('/hello', (req, res) => res.send('word'))
  }

  private config():void{
    this.app.use(express.json());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
  }


}

export default App;