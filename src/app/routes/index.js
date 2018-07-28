
export class Index {
    
    constructor(app) {
        app.get('/', app.controller.index.home);
    }
}