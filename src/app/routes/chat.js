
export class Chat {
    
    constructor(app) {
        app.get('/chat', (req, res) => app.controller.chat.iniciar(req , res))
        app.post('/chat', (req, res) => app.controller.chat.conectar(req, res))
    }
}