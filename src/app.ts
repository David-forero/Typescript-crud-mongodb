import express, { urlencoded } from 'express';
import morgan from 'morgan';
import path from 'path';

//routes
import indexRouter from './routes/index';
import taskRouter from './routes/task';

class Application{
    app: express.Application;

    constructor (){
        this.app = express(); //utiliza express
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', process.env.PORT || 3000);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    
    routes(){
        this.app.use(indexRouter);
        this.app.use('/task',taskRouter);
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    start(){//inicar el servidor
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor on port", this.app.get('port'));
        });
    }
}

export default Application;