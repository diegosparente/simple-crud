const express = require('express');
const server = express();

server.use(express.json());
server.use(calls);


const projects = [];
let numberOfCalls = 0;

//Middlewares

//Existência de um projeto
function projectChecker(req, res, next) {
    const { id } = req.params;
    const walkingInProject = projects.find(value => value.id === id);

    if(!walkingInProject) {
        return res.status(400).json({ error: 'Projeto não encontrado!' });
    }

    next();
}

//Contador de requisições
function calls(req, res, next) {
    numberOfCalls+=1;

    console.log(`O total de chamadas é de: ${numberOfCalls}`);

    next();
}

//Cria um novo projeto
server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    const project = {
        id,
        title,
        tasks: []
    };

    projects.push(project);

    return res.json(project);
});

//Lista todos os projetos
server.get('/projects', (req, res) => {
    return res.json(projects);
});

//Atualiza o título de um projeto
server.put('/projects/:id', projectChecker, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
  
    const walkingInProject = projects.find(value => value.id === id);
  
    walkingInProject.title = title;
  
    return res.json(walkingInProject);
  });

//Exclui um projeto
server.delete('/projects/:id', projectChecker, (req, res) => {
    const { id } = req.params;

    const projectIndex = projects.findIndex(value => value.id === id);

    projects.splice(projectIndex, 1);

    return res.send('Removido com sucesso!');
});

//Adicionando Tarefas
server.post('/projects/:id/tasks', projectChecker, (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    const walkingInProject = projects.find(value => value.id === id);

    walkingInProject.tasks.push(task);

    return res.json(walkingInProject);
});

server.listen(3333);