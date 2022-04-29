// import {Peca} from "./pecas/Peca";

export default class Tabuleiro {
    casas; //vai guardar a matriz de casas do tabuleiro no formato [linha][coluna]

    peca;

    casaSelecionada;

    constructor() {
        this.iniciarTabuleiro();
        this.casaSelecionada = null;
    }

    iniciarTabuleiro() {
        this.instanciaMatrizDeCasas();

        //instanciando pecas brancas
        this.casas[0][0] = new Peca(0, 0, 'r', true);
        this.casas[0][1] = new Peca(0, 1, 'n', true);
        this.casas[0][2] = new Peca(0, 2, 'b', true);
        this.casas[0][3] = new Peca(0, 3, 'q', true);
        this.casas[0][4] = new Peca(0, 4, 'k', true);
        this.casas[0][5] = new Peca(0, 5, 'b', true);
        this.casas[0][6] = new Peca(0, 6, 'n', true);
        this.casas[0][7] = new Peca(0, 7, 'r', true);

        //instanciando peoes brancos
        for (var coluna = 0; coluna < 8; coluna++) {
            this.casas[1][coluna] = new Peca(1, coluna, 'p', true)
        }

        //instanciando casas vazias
        for (var linha = 2; linha < 6; linha++) {
            for (var coluna = 0; coluna < 8; coluna++) {
                this.casas[linha][coluna] = { linha: linha, coluna: coluna };
            }
        }

        //instanciando peoes pretos
        for (var coluna = 0; coluna < 8; coluna++) {
            this.casas[6][coluna] = new Peca(1, coluna, 'p', false);
        }

        this.casas[7][0] = new Peca(7, 0, 'r', false);
        this.casas[7][1] = new Peca(7, 1, 'n', false);
        this.casas[7][2] = new Peca(7, 2, 'b', false);
        this.casas[7][3] = new Peca(7, 3, 'q', false);
        this.casas[7][4] = new Peca(7, 4, 'k', false);
        this.casas[7][5] = new Peca(7, 5, 'b', false);
        this.casas[7][6] = new Peca(7, 6, 'n', false);
        this.casas[7][7] = new Peca(7, 7, 'r', false);
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

            for (var casa of linha) {
                var td = document.createElement("td");

                if (this.ehCasaPreta(casa.linha, casa.coluna))
                    td.className = "bg-preto";

                td.addEventListener('click', (evt) => this.selecionaCasa(evt.target))

                if (casa.peca) {
                    var img = document.createElement("img");
                    img.src = this.recuperaSpriteCasa(casa);
                    td.appendChild(img);
                }
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        tabuleiro.appendChild(tbody);
        return tabuleiro;
    }

    ehCasaPreta(linha, coluna) {
        return (
            (linha % 2 == 0) & (coluna % 2 != 0) ||
            (linha % 2 != 0) & (coluna % 2 == 0)
        );
    }

    recuperaSpriteCasa(peca) { //retorna nome da imagem que compoe a peca
        if (peca.ehBranca) return "images/" + peca.tipo + 'd' + ".png";
        if (!peca.ehBranca) return "images/" + peca.tipo + 'l' + ".png";
        
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
