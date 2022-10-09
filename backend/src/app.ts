import * as express from "express";
import router from "./routes";

class App {
  public app: express.Express;
  constructor() {
    this.app = express()
    this.config()
    this.app.use('/', router);
    this.app.get('/hello', (req, res) => res.send('word'))
    this.middlewareError()
  }

  private config():void{
    this.app.use(express.json());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
  }

  private middlewareError() {
    this.app.use((error:Error,req:express.Request, res:express.Response, _next:express.NextFunction) => {
      console.log(error);
      res.status(500).json({message: 'Internal error server'})
    })
  }

}

export default App;