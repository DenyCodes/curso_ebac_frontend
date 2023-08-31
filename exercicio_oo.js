function Computador(modelo, processador, memoria) {
    this.modelo = modelo,
    this.processador = processador

    let _memoria = memoria

    this.getMemoria = function () {
        return _memoria
    }

    this.setMemoria = function (TipoMemoria) {
        if (typeof TipoMemoria === 'string') {
            return _memoria = TipoMemoria
        }
    }

    this.tempoParaLigar = function () {
        return
    }
}

function Desktop (modelo, processador, memoria) {
    Computador.call(this, modelo, processador, memoria)

    this.tempoParaLigar = function () {
        return 5
    }
}

function Notebook(modelo, processador, memoria) {
    Computador.call(this, modelo, processador, memoria)

    this.tempoParaLigar = function () {
        return 10
    }
}

const DesktopDenis = new Desktop ('Desktop', 'AMD', 'DDR4')
console.log(DesktopDenis.getMemoria());

const NotebookDenis = new Notebook ('Notebook', 'Intel', 'DDR3')
console.log(NotebookDenis.getMemoria());
