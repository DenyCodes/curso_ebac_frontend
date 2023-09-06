const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Denis', 'Daniel', 'Lucas', 'Paula'];

const alunos2 = alunos.map(function(itemAtual) {
    return  {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2)

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome =='Paulo'
})
console.log(indiceDaPaula)

//every
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})
const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})
console.log(todosAlunosSaoDeFrontend);

const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend);

function filtraAlunosDeBackend(aluno) {
return alunos2.curso === 'Backend';
}

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend);

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador
}, 0)

console.log(soma)

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')
console.log(nomeDosAlunos)