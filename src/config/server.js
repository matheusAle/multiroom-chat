import express from 'express';
import  * as bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import { Index } from '../app/routes';
import { IndexController } from '../app/controller/indexController';
import { Chat } from '../app/routes/chat';
import { ChatController } from '../app/controller/chatController';

export const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/../app/view`);

app.use(express.static(`${__dirname}/../app/view/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator())

app.controller = {
    index: new IndexController(app),
    chat: new ChatController(app),
}

new Index(app);
new Chat(app);