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
            this.casas[1][coluna].peca = new Peca()
            this.casas[1][coluna].temPeca = true;
            this.casas[1][coluna].peca = new Peca();
            this.casas[1][coluna].peca.linha = 0
            this.casas[1][coluna].peca.coluna = 0
            this.casas[1][coluna].peca.tipo = 'p'
            this.casas[1][coluna].peca.ehBranco = true;
            this.casas[1][coluna].peca.getImagem()
        }
        //instanciando pecas brancas
        this.casas[0][0].temPeca = true;
        this.casas[0][0].peca = new Peca();
        this.casas[0][0].peca.linha = 0
        this.casas[0][0].peca.coluna = 0
        this.casas[0][0].peca.tipo = 'r'
        this.casas[0][0].peca.ehBranco = true;
        this.casas[0][0].peca.getImagem()

        this.casas[0][1].temPeca = true;
        this.casas[0][1].peca = new Peca();
        this.casas[0][1].peca.linha = 0
        this.casas[0][1].peca.coluna = 1
        this.casas[0][1].peca.tipo = 'n'
        this.casas[0][1].peca.ehBranco = true;
        this.casas[0][1].peca.getImagem()

        this.casas[0][2].temPeca = true;
        this.casas[0][2].peca = new Peca();
        this.casas[0][2].peca.linha = 0
        this.casas[0][2].peca.coluna = 2
        this.casas[0][2].peca.tipo = 'b'
        this.casas[0][2].peca.ehBranco = true;
        this.casas[0][2].peca.getImagem()

        this.casas[0][3].temPeca = true;
        this.casas[0][3].peca = new Peca();
        this.casas[0][3].peca.linha = 0
        this.casas[0][3].peca.coluna = 3
        this.casas[0][3].peca.tipo = 'q'
        this.casas[0][3].peca.ehBranco = true;
        this.casas[0][3].peca.getImagem()

        this.casas[0][4].temPeca = true;
        this.casas[0][4].peca = new Peca();
        this.casas[0][4].peca.linha = 0
        this.casas[0][4].peca.coluna = 4
        this.casas[0][4].peca.tipo = 'k'
        this.casas[0][4].peca.ehBranco = true;
        this.casas[0][4].peca.getImagem()

        this.casas[0][5].temPeca = true;
        this.casas[0][5].peca = new Peca();
        this.casas[0][5].peca.linha = 0
        this.casas[0][5].peca.coluna = 5
        this.casas[0][5].peca.ehBranco = true;
        this.casas[0][5].peca.tipo = 'b'
        this.casas[0][5].peca.getImagem()

        this.casas[0][6].temPeca = true;
        this.casas[0][6].peca = new Peca();
        this.casas[0][6].peca.linha = 0
        this.casas[0][6].peca.coluna = 6
        this.casas[0][6].peca.tipo = 'n'
        this.casas[0][6].peca.ehBranco = true;
        this.casas[0][6].peca.getImagem()

        this.casas[0][7].temPeca = true;
        this.casas[0][7].peca = new Peca();
        this.casas[0][7].peca.linha = 0
        this.casas[0][7].peca.coluna = 7
        this.casas[0][7].peca.tipo = 'r'
        this.casas[0][7].peca.ehBranco = true;
        this.casas[0][7].peca.getImagem()

        //instanciando peoes pretos
        for (var coluna = 0; coluna < 8; coluna++) {
            this.casas[6][coluna].peca = new Peca()
            this.casas[6][coluna].temPeca = true;
            this.casas[6][coluna].peca = new Peca();
            this.casas[6][coluna].peca.linha = 0
            this.casas[6][coluna].peca.coluna = 0
            this.casas[6][coluna].peca.tipo = 'p'
            this.casas[6][coluna].peca.ehBranco = false;
            this.casas[6][coluna].peca.getImagem()
        }
        // instanciando pecas pretas
        this.casas[7][0].temPeca = true;
        this.casas[7][0].peca = new Peca();
        this.casas[7][0].peca.linha = 0
        this.casas[7][0].peca.coluna = 0
        this.casas[7][0].peca.tipo = 'r'
        this.casas[7][0].peca.ehBranco = false;
        this.casas[7][0].peca.getImagem()

        this.casas[7][1].temPeca = true;
        this.casas[7][1].peca = new Peca();
        this.casas[7][1].peca.linha = 0
        this.casas[7][1].peca.coluna = 1
        this.casas[7][1].peca.tipo = 'n'
        this.casas[7][1].peca.ehBranco = false;
        this.casas[7][1].peca.getImagem()

        this.casas[7][2].temPeca = true;
        this.casas[7][2].peca = new Peca();
        this.casas[7][2].peca.linha = 0
        this.casas[7][2].peca.coluna = 2
        this.casas[7][2].peca.tipo = 'b'
        this.casas[7][2].peca.ehBranco = false;
        this.casas[7][2].peca.getImagem()

        this.casas[7][3].temPeca = true;
        this.casas[7][3].peca = new Peca();
        this.casas[7][3].peca.linha = 0
        this.casas[7][3].peca.coluna = 3
        this.casas[7][3].peca.tipo = 'q'
        this.casas[7][3].peca.ehBranco = false;
        this.casas[7][3].peca.getImagem()

        this.casas[7][4].temPeca = true;
        this.casas[7][4].peca = new Peca();
        this.casas[7][4].peca.linha = 0
        this.casas[7][4].peca.coluna = 4
        this.casas[7][4].peca.tipo = 'k'
        this.casas[7][4].peca.ehBranco = false;
        this.casas[7][4].peca.getImagem()

        this.casas[7][5].temPeca = true;
        this.casas[7][5].peca = new Peca();
        this.casas[7][5].peca.linha = 0
        this.casas[7][5].peca.coluna = 5
        this.casas[7][5].peca.ehBranco = false;
        this.casas[7][5].peca.tipo = 'b'
        this.casas[7][5].peca.getImagem()

        this.casas[7][6].temPeca = true;
        this.casas[7][6].peca = new Peca();
        this.casas[7][6].peca.linha = 0
        this.casas[7][6].peca.coluna = 6
        this.casas[7][6].peca.tipo = 'n'
        this.casas[7][6].peca.ehBranco = false;
        this.casas[7][6].peca.getImagem()

        this.casas[7][7].temPeca = true;
        this.casas[7][7].peca = new Peca();
        this.casas[7][7].peca.linha = 0
        this.casas[7][7].peca.coluna = 7
        this.casas[7][7].peca.tipo = 'r'
        this.casas[7][7].peca.ehBranco = false;
        this.casas[7][7].peca.getImagem()
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

                td.addEventListener('click', (evt) => {
                    console.log("evt.target da selecionaCasa: ", evt)    
                    this.selecionaCasa(evt.target)})
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
        console.log("teste marcaCasaSelecionada", this.ehCasaVazia)
        //TODO: validation for house
        element.classList.add("casa-selecionada")
        if(!this.ehCasaVazia(element)) {s
            console.log("teste marcaCasaCheia")
            this.podeMover(element.peca)
        }
    }
    ehCasaVazia(casa) {
        console.log("teste ehCasaVazia", this.ehCasaVazia)
        if (casa.peca == undefined || casa.peca == null){
            console.log("teste ehCasaVazia true", this.ehCasaVazia)
            return true
        } else {
            console.log("ehCasaVazia sim", this.ehCasaVazia)
            return false
        }
    }

    desmarcaCasaSelecionada(element){
        element.classList.remove("casa-selecionada")
    }
    //TODO: renderiza de novo o tabuleiro com as localizações atualizadas. Deve ser chamada a cada movimento
    reRender() {
        //TODO: Se for o caso
        this.updatePeao(peao)
        return
    }
    //TODO: confere se a peça selecionada pode ser movida. ela não pode ir para onde estão outas peças da mesma cor, não pode voltar para trás dependendo do tipo da peça
    podeMover(pecaSelecionada) {
        return
    }
    //TODO: mostra quais movimentos podem ser feitos
    mostraMovimentoPeca(pecaSelecionada) {
        this.podeMover(pecaSelecionada);
        return
    }
    //TODO: mata a peça
    mataPeca(pecaMorta) {
        return
    }
    //TODO: exibe peça morta ao lado. Pode ser uma lista de elementos peca.
    updateCemiterio(pecaMorta) {
        return
    }
    //TODO: o peão quando chega ao final do tabuleiro se transforma
    updatePeao(peao) {
        return
    }
    // TODO: é importante checar a vez de cada usuário para ninguém mexer na peça do oponente
    vezUser() {
        
    }
}
