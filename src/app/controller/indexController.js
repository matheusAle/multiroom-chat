
export class IndexController {
    
    home(req, res) {
        res.render('index', { errors : undefined })
    }
}