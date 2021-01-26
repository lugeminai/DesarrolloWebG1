module.exports = app => {
    app.get('/api/curso/GetCursos', (req, res) => {
        var data = require('../json/curso.json');
        res.json(data);
    })

    
}