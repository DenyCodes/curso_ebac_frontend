function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    // getters e setters
    this.getSalario = function (){
        return _salario;
    }

    this.setsSalario = function(valor){
        if (typeof valor === 'number'){
            _salario = valor;
        }
    }

    this.aumento = function(){
        const novoSalario = _salario * 1.1;

    }

    this.dizCargo = function(){
        console.log(this.cargo);
    }
}

function Estagiario(nome){
    Funcionario.call(this, nome, "estagiario", 2000);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.07;
        this.setsSalario(novoSalario);
    }
}
function Gerente(nome){
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.15;
        this.setsSalario(novoSalario);
    }
}

const funcionario1 = new Funcionario ("Denis", "dev front-end", 5000);
const funcionario2 = new Estagiario ("Oliveira");
const funcionario3 = new Gerente ("Gerente")

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())