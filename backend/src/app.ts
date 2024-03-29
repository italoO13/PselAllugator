import * as express from "express";
import router from "./routes";
import * as cors from 'cors';

class App {
  public app: express.Express;
  constructor() {
    this.app = express()
    this.config()
    this.app.use(cors())
    this.app.use('/', router);
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

// Importante exportar dessa forma para conseguir rodar os testes
export const { app } = new App();