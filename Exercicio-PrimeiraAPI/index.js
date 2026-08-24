const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// ----- ALUNOS -----

const alunos = [
    { id: 1, nome: 'Marcella', idade: 21 }
]

// listar alunos 
app.get('/alunos', (_, res) => {
    res.status(200).json(alunos);
});

//cadastrar aluno
app.post('/alunos', (req, res) => {
    const { nome, idade } = req.body;
    const id = alunos.length + 1;

    alunos.push({ id, nome, idade });
    res.status(200).json();
})

//visualizar aluno por id 

app.get('/alunos/:id', (req, res) => {
    res.status(200).json(alunos[req.params.id])
})

// editar aluno por id com PUT

app.put('/alunos/:id', (req, res) => {
    const { nome, idade } = req.body;
    const id = req.params.id;

    const alunoEditado = { id, nome, idade };
    alunos[id] = alunoEditado;

    res.status(200).json();
})

// editar um aluno por id com PATCH

app.patch('/alunos/:id', (req, res) => {
    const { nome, idade } = req.body;
    const id = req.params.id;

    const aluno = alunos[id];
    if (nome) aluno.nome = nome;
    if (idade) aluno.idade = idade;

    res.status(200).json();
});

// deletar um aluno por id 

app.delete('/alunos/:id', (req, res) => {
    const id = req.params.id;
    alunos.splice(id, 1);
    res.status(200).json();
})

// ----- CURSOS -----

const cursos = [
    { id: 0, nome: 'JavaScript' }
]

// listar os cursos 

app.get('/cursos', (_, res) => {
    res.status(200).json(cursos);
})

// cadastrar curso 

app.post('/cursos', (req, res) => {
    const { nome } = req.body;
    const id = cursos.length + 1;

    const novoCurso = { nome, id };
    cursos.push(novoCurso);

    res.status(200).json();

})

// visualizar curso por id 

app.get('/cursos/:id', (req, res) => {
    res.status(200).json(cursos[req.params.id]);
})

// editar curso por id com PUT 

app.put('/cursos/:id', (req, res) => {
    const { nome } = req.body;
    const id = req.params.id;
    const cursoEditado = { nome, id };
    cursos[id] = cursoEditado;
    res.status(200).json();
})

// editar curso por id com PATCH

app.patch('/cursos/:id', (req, res) => {
    const { nome } = req.body;
    const id = req.params.id;

    const curso = cursos[id];
    if (nome) curso.nome = nome;

    res.status(200).json();
});

// deletar curso por id 

app.delete('/cursos/:id', (req, res) => {
    const id = req.params.id;
    cursos.splice(id, 1);
    res.status(200).json();
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})