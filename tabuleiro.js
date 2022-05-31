class Tabuleiro {
    casas; //vai guardar a matriz de casas do tabuleiro no formato [linha][coluna]
    casaSelecionada;
    parentDiv;

    constructor(parentDiv) {
        this.parentDiv = parentDiv;
        this.iniciarTabuleiro();
        this.casaSelecionada = null;
    }

    iniciarTabuleiro() {
        this.instanciaMatrizDeCasas();

        //instanciando pecas brancas
        this.casas[0][0] = { linha: 0, coluna: 0, peca: new Torre(0, 0, "d"), atacada: []};
        this.casas[0][1] = { linha: 0, coluna: 1, peca: new Cavalo(0, 1,"d"), atacada: []};
        this.casas[0][2] = { linha: 0, coluna: 2, peca: new Bispo(0, 2, "d"), atacada: []};
        this.casas[0][3] = { linha: 0, coluna: 3, peca: new Dama(0, 3, "d"), atacada: []};
        this.casas[0][4] = { linha: 0, coluna: 4, peca: new Rei(0, 4, "d"), atacada: []};
        this.casas[0][5] = { linha: 0, coluna: 5, peca: new Bispo(0, 5, "d"), atacada: []};
        this.casas[0][6] = { linha: 0, coluna: 6, peca: new Cavalo(0, 6,"d"), atacada: []};
        this.casas[0][7] = { linha: 0, coluna: 7, peca: new Torre(0, 7, "d"), atacada: []};

        //instanciando peoes brancos
        for (var coluna = 0; coluna < 8; coluna++) {
            this.casas[1][coluna] = {
                linha: 1,
                coluna: coluna,
                peca: new Peao(1, coluna, "d"), 
                atacada: []
            };
        }

        //instanciando casas vazias
        for (var linha = 2; linha < 6; linha++) {
            for (var coluna = 0; coluna < 8; coluna++) {
                this.casas[linha][coluna] = { linha: linha, coluna: coluna, atacada: []};
            }
        }

        //instanciando peoes pretos
        for (var coluna = 0; coluna < 8; coluna++) {
            this.casas[6][coluna] = {
                linha: 6,
                coluna: coluna,
                peca: new Peao(6, coluna, "l"),
                atacada: []
            };
        }

        this.casas[7][0] = { linha: 7, coluna: 0, peca: new Torre(7, 0, "l"), atacada: []};
        this.casas[7][1] = { linha: 7, coluna: 1, peca: new Cavalo(7, 1,"l"), atacada: []};
        this.casas[7][2] = { linha: 7, coluna: 2, peca: new Bispo(7, 2, "l"), atacada: []};
        this.casas[7][3] = { linha: 7, coluna: 3, peca: new Dama(7, 3, "l"), atacada: []};
        this.casas[7][4] = { linha: 7, coluna: 4, peca: new Rei(7, 4, "l"), atacada: []};
        this.casas[7][5] = { linha: 7, coluna: 5, peca: new Bispo(7, 5, "l"), atacada: []};
        this.casas[7][6] = { linha: 7, coluna: 6, peca: new Cavalo(7, 6,"l"), atacada: []};
        this.casas[7][7] = { linha: 7, coluna: 7, peca: new Torre(7, 7, "l"), atacada: []};
    }

    instanciaMatrizDeCasas() {
        this.casas = [];
        for (var i = 0; i < 8; i++) {
            this.casas[i] = new Array(8);
        }
    }

    render() { //retorna o HTML que gera o tabuleiro
        var divTabuleiro = document.createElement("table")
        divTabuleiro.id = "tabuleiro"
        var tbody = document.createElement("tbody")
        for (var [iLinha, linha] of this.casas.entries()) {
            var tr = document.createElement("tr")
            for (var [iCasa, casa] of linha.entries()) {
                var td = document.createElement("td")

                if (this.ehCasaPreta(casa.linha, casa.coluna))
                    td.className = "bg-preto"

                td.addEventListener('click', (evt) => this.selecionaCasa(evt.target))

                if (casa.peca) {
                    var img = document.createElement("img")
                    img.src = this.recuperaSpriteCasa(casa)
                    td.appendChild(img)
                }

                td.id = [iLinha] + [iCasa]
                tr.appendChild(td)
            }
            tbody.appendChild(tr)
        }
        divTabuleiro.appendChild(tbody)
        this.parentDiv.innerHTML = null
        this.parentDiv.appendChild(divTabuleiro)
    }

    ehCasaPreta(linha, coluna) {
        return (
            (linha % 2 == 0) & (coluna % 2 != 0) ||
            (linha % 2 != 0) & (coluna % 2 == 0)
        );
    }

    recuperaSpriteCasa(casa) { //retorna nome da imagem que compoe a peca
        if(casa.peca.tipo) return casa.peca.getSpritePeca();
        return "images/" + casa.peca + casa.cor + ".png";
    }

    selecionaCasa(element){
        if(this.getCasaFromTdElement(element).possivelMovimento){
            this.movimentaPeca(this.getCasaFromTdElement(element))
            this.marcaCasasComoAtacadas()
            this.limpaTabuleiro();
        }
        else if(this.casaSelecionada == null) { //nenhuma casa selecionada
            this.casaSelecionada = this.getCasaFromTdElement(element)
            this.marcaCasaSelecionada()
            this.mostraMovimentosPossiveis()
        }
        else if(this.casaSelecionada != this.getCasaFromTdElement(element)) { //casa selecionada antes é diferente da ultima clicada
            this.desmarcaCasaSelecionada()
            this.casaSelecionada = this.getCasaFromTdElement(element)
            this.limpaTabuleiro();
            this.marcaCasasComoAtacadas()
            this.marcaCasaSelecionada()
            this.mostraMovimentosPossiveis()
        }
        else{ //clique na mesma casa que ja havia sido selecionada
            this.desmarcaCasaSelecionada()
            this.casaSelecionada = null
            this.limpaTabuleiro();
        }
    }

    mostraMovimentosPossiveis(){
        if(this.casaSelecionada.peca)
            this.casaSelecionada.peca.getMovimentosPossiveis(this.casas).forEach(casa => {
                this.casas[casa.linha][casa.coluna].possivelMovimento = true;
                this.marcaCasaComoMovimentavel(this.getTdElementFromCasa(this.casas[casa.linha][casa.coluna]))
            });
    }

    marcaCasasComoAtacadas(){
        for(let linha of this.casas){
            for(let casa of linha){
                let movimentosPossiveis = []
                if(casa.peca){
                    movimentosPossiveis = casa.peca.getCasasAtacadas(this.casas);
                    movimentosPossiveis.forEach(m =>{
                        if(this.casas[m.linha][m.coluna].atacada.indexOf(casa.peca.cor) == -1)
                            this.casas[m.linha][m.coluna].atacada.push(casa.peca.cor)
                    })
                }
            }
        }
    }

    getCasaFromTdElement(element){
        var id = element.id;
        return this.casas[id[0]][id[1]]
    }

    getTdElementFromCasaSelecionada(){
        return document.getElementById(this.casaSelecionada.linha + "" + this.casaSelecionada.coluna)
    }

    getTdElementFromCasa(casa){
        return document.getElementById(casa.linha + "" + casa.coluna);
    }

    movimentaPeca(casaAlvo){
        var casaPecaMovimentada = this.casaSelecionada;
        casaAlvo.peca = casaPecaMovimentada.peca;
        casaAlvo.peca.movimentada(casaAlvo.linha, casaAlvo.coluna)
        casaPecaMovimentada.peca = null;
        this.render()
    }

    limpaTabuleiro(){
        var casasElement = Array.from(document.getElementsByClassName("casa-movimentavel"))
        casasElement.forEach(element => element.classList.remove("casa-movimentavel"))

        this.casas.forEach(linha => linha.forEach(casa => {
            casa.possivelMovimento = false
            casa.atacada = []
        }));
    }

    marcaCasaComoMovimentavel(casaElement){
        casaElement.classList.add("casa-movimentavel")
    }

    marcaCasaSelecionada(){
        this.getTdElementFromCasaSelecionada().classList.add("casa-selecionada")
    }

    desmarcaCasaSelecionada(){
        this.getTdElementFromCasaSelecionada().classList.remove("casa-selecionada")
    }
}
