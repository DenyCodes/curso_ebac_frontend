const alunos: { nome: string, cursos: string[], idade: number }[] = [
    {
        nome: 'Giancarlo',
        cursos: ['Front-end', 'UX/UI'],
        idade: 20
    },
    {
        nome: 'Daniela',
        cursos: ['Front-end', 'Python'],
        idade: 20
    }
]
type aluno = {
    nome: string,
    cursos?: string[]
    idade: number
}

const alunos2: aluno[] = [
    {
        nome: 'Giancarlo',
        cursos: ['Front-end', 'UX/UI'],
        idade: 20
    },
    {
        nome: 'Daniela',
        cursos: ['Front-end', 'Python'],
        idade: 20
    }
]
let alunoNovo: aluno = {
    nome: 'Diego',
    idade: 37
}

function exibiAluno(aluno: aluno): void {
    console.log(aluno);    
}