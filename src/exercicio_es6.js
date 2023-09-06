var alunos = ['Denis', 'Daniel', 'Lucas'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        nota: '8'
    }
})

alunos2.push({
    nome: 'Lucio',
    nota: '6'
})

const alunosComNota6 = alunos2.filter(function(item) {
    return item.nota === '6' 
})

console.log(alunosComNota6)
