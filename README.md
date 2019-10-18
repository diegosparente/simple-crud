# API - CRUD

## Objetivo

O objetivo da aplicação é armazenar os projetos e suas tarefas do zero usando ExpressJS

## Rotas

|Método|Rota|Descrição|
|:--|:--|:--|
|POST|/projects|Deve receber o `id` e `title` dentro do corpo e cadastrar um novo projeto: `{ id: "1", title: 'Novo projeto', tasks: [] }`. O `id` deve ser enviado no formato de STRING com aspas duplas.
|GET|/projects|Lista todos os projetos
|PUT|/projects/:id|Altera somente apena o título do projeto com `id` presente nos parâmetros da rota
|POST|/projects/:id/tasks|Deve receber um campo `title` e armazenar um nova tarefa usando `id` presente no parâmetro da rota
|DELETE|/projects/:id|Deve deletar o projeto com o `id` presente nos parâmetros da rota


