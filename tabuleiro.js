  class Tabuleiro {
    casas; //vai guardar a matriz de casas do tabuleiro no formato [linha][coluna]
    peca;
    casaSelecionada;
    casa;

    constructor() {
        // this.casa = new Casa();
        this.iniciarTabuleiro();
        this.casaSelecionada = null;
    }

    iniciarTabuleiro() {
        this.instanciaMatrizDeCasas();
        //instanciando casas vazias
        for (var linha = 0; linha < 8; linha++) {
            for (var coluna = 0; coluna < 8; coluna++) {
                this.casas[linha][coluna] = new Casa ();
                this.casas[linha][coluna].linha = linha;
                this.casas[linha][coluna].coluna = coluna;
            }
        }
        this.iniciaPecas()
    }
    iniciaPecas() {
        //instanciando peoes brancos
        for (var coluna = 0; coluna < 8; coluna++) {
            this.casas[1][coluna].peca = new Peca(1, coluna, 'p', true)
        }
        //instanciando pecas brancas
    
        this.casas[0][0].temPeca = true;
        this.casas[0][0].peca = new Peca();
        this.casas[0][0].peca.linha = 0
        this.casas[0][0].peca.coluna = 0
        this.casas[0][0].peca.tipo = 'r'
        this.casas[0][0].peca.getImagem()
        this.casas[0][0].peca.ehBranco = true;

        this.casas[0][1].temPeca = true;
        this.casas[0][1].peca = new Peca();
        this.casas[0][1].peca.linha = 0
        this.casas[0][1].peca.coluna = 1
        this.casas[0][1].peca.tipo = 'n'
        this.casas[0][1].peca.getImagem()
        this.casas[0][1].peca.ehBranco = true;

        this.casas[0][2].temPeca = true;
        this.casas[0][2].peca = new Peca();
        this.casas[0][2].peca.linha = 0
        this.casas[0][2].peca.coluna = 2
        this.casas[0][2].peca.tipo = 'b'
        this.casas[0][2].peca.getImagem()
        this.casas[0][2].peca.ehBranco = true;

        this.casas[0][3].temPeca = true;
        this.casas[0][3].peca = new Peca();
        this.casas[0][3].peca.linha = 0
        this.casas[0][3].peca.coluna = 3
        this.casas[0][3].peca.tipo = 'q'
        this.casas[0][3].peca.getImagem()
        this.casas[0][3].peca.ehBranco = true;

        this.casas[0][4].temPeca = true;
        this.casas[0][4].peca = new Peca();
        this.casas[0][4].peca.linha = 0
        this.casas[0][4].peca.coluna = 4
        this.casas[0][4].peca.tipo = 'k'
        this.casas[0][4].peca.getImagem()
        this.casas[0][4].peca.ehBranco = true;

        this.casas[0][5].temPeca = true;
        this.casas[0][5].peca = new Peca();
        this.casas[0][5].peca.linha = 0
        this.casas[0][5].peca.coluna = 5
        this.casas[0][5].peca.tipo = 'b'
        this.casas[0][5].peca.getImagem()
        this.casas[0][5].peca.ehBranco = true;

        this.casas[0][6].temPeca = true;
        this.casas[0][6].peca = new Peca();
        this.casas[0][6].peca.linha = 0
        this.casas[0][6].peca.coluna = 6
        this.casas[0][6].peca.tipo = 'n'
        this.casas[0][6].peca.getImagem()
        this.casas[0][6].peca.ehBranco = true;

        this.casas[0][7].temPeca = true;
        this.casas[0][7].peca = new Peca();
        this.casas[0][7].peca.linha = 0
        this.casas[0][7].peca.coluna = 7
        this.casas[0][7].peca.tipo = 'r'
        this.casas[0][7].peca.getImagem()
        this.casas[0][7].peca.ehBranco = true;

        //instanciando peoes pretos
        for (var coluna = 0; coluna < 8; coluna++) {
            this.casas[6][coluna].peca = new Peca(1, coluna, 'p', false);
        }
        // instanciando pecas pretas
        this.casas[7][0].peca = new Peca(7, 0, 'r', false);
        this.casas[7][1].peca = new Peca(7, 1, 'n', false);
        this.casas[7][2].peca = new Peca(7, 2, 'b', false);
        this.casas[7][3].peca = new Peca(7, 3, 'q', false);
        this.casas[7][4].peca = new Peca(7, 4, 'k', false);
        this.casas[7][5].peca = new Peca(7, 5, 'b', false);
        this.casas[7][6].peca = new Peca(7, 6, 'n', false);
        this.casas[7][7].peca = new Peca(7, 7, 'r', false);
    }

    instanciaMatrizDeCasas() {
        this.casas = [];
        for (var i = 0; i < 8; i++) {
            this.casas[i] = new Array(8);
        }
    }


    render() { //retorna o HTML que gera o tabuleiro
        var tabuleiro = document.createElement("table");
        var tbody = document.createElement("tbody");
        for (var linha of this.casas) {
            var tr = document.createElement("tr");
            
            for (var casaObj of linha) {
                var td = document.createElement("td");
                

                if (this.ehCasaPreta(casaObj))
                    td.className = "bg-preto";

                td.addEventListener('click', (evt) => this.selecionaCasa(evt.target))
                if (casaObj.temPeca) {
                    var img = document.createElement("img");
                    img.src = casaObj.peca.imagemSrc;
                    td.appendChild(img);
                }
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        tabuleiro.appendChild(tbody);
        return tabuleiro;
    }

    ehCasaPreta(casa) {
        return ((casa.linha % 2 == 0) && (casa.coluna % 2 != 0) || (casa.linha % 2 != 0) && (casa.coluna % 2 == 0) ? true: false)
        
    }

    selecionaCasa(element){

        if(this.casaSelecionada == null) { //nenhuma casa selecionada
            this.casaSelecionada = element
            this.marcaCasaSelecionada(this.casaSelecionada)
        }
        else if(this.casaSelecionada != element) { //casa selecionada antes é diferente da ultima clicada
            this.desmarcaCasaSelecionada(this.casaSelecionada)
            this.casaSelecionada = element
            this.marcaCasaSelecionada(this.casaSelecionada)
        }
        else{ //clique na mesma casa que ja havia sido selecionada
            this.casaSelecionada = null
            this.desmarcaCasaSelecionada(element)
        }
    }

    marcaCasaSelecionada(element){
        element.classList.add("casa-selecionada")
    }

    desmarcaCasaSelecionada(element){
        element.classList.remove("casa-selecionada")
    }
}
