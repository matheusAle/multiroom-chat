
export class ChatController {
    
    constructor(app) {
        this.app = app;
    }
    
    iniciar(req, res) {
        res.render('chat', { apelido: '' });
    }
    
    conectar(req, res) {
        req.assert('apelido', 'Nome ou apelodo é obrigatório.').notEmpty();
        req.assert('apelido', 'Nome ou apelodo deve ter entre 3 e 15 caracteres.').len(3, 15);
        
        const errors = req.validationErrors();
        if (errors) {
            res.render('index', { errors });
            return;
        }
        
        const apelido = req.body.apelido;
        this.app.get('io').emit('msgParaoCliente', { msg: `${apelido} comectou-se!`, from: 'server' });
        res.render('chat', { apelido });
    }
}