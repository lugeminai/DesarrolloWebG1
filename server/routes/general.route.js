module.exports = app => {
    app.get('/api/project/GetProjects', (req, res) => {
        var data = require('../json/project.json');
        res.json(data);
    })

    
}