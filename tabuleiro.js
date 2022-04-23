class Tabuleiro{

    casas; //vai guardar a matriz de casas do tabuleiro no formato [linha][coluna]

    casaSelecionada;

    constructor(){
        this.iniciarTabuleiro()
        this.casaSelecionada = null
    }

    iniciarTabuleiro(){
        this.instanciaMatrizDeCasas()

        //instanciando pecas brancas
        this.casas[0][0] = {linha:0, coluna:0, peca: "r", cor: "d"}
        this.casas[0][1] = {linha:0, coluna:1, peca: "n", cor: "d"}
        this.casas[0][2] = {linha:0, coluna:2, peca: "b", cor: "d"}
        this.casas[0][3] = {linha:0, coluna:3, peca: "q", cor: "d"}
        this.casas[0][4] = {linha:0, coluna:4, peca: "k", cor: "d"}
        this.casas[0][5] = {linha:0, coluna:5, peca: "b", cor: "d"}
        this.casas[0][6] = {linha:0, coluna:6, peca: "n", cor: "d"}
        this.casas[0][7] = {linha:0, coluna:7, peca: "r", cor: "d"}

        //instanciando peoes brancos
        for(var coluna = 0; coluna < 8; coluna++){ 
            this.casas[1][coluna] = {linha: 1, coluna: coluna, peca: "p", cor: "d"}
        }

        //instanciando casas vazias
        for(var linha = 2; linha < 6; linha++){
            for(var coluna = 0; coluna < 8; coluna++){
                this.casas[linha][coluna] = {linha: linha, coluna: coluna}
            }
        }

        //instanciando peoes pretos
        for(var coluna = 0; coluna < 8; coluna++){ 
            this.casas[6][coluna] = {linha: 1, coluna: coluna, peca: "p", cor: "l"}
        }

        this.casas[7][0] = {linha:0, coluna:0, peca: "r", cor: "l"}
        this.casas[7][1] = {linha:0, coluna:1, peca: "n", cor: "l"}
        this.casas[7][2] = {linha:0, coluna:2, peca: "b", cor: "l"}
        this.casas[7][3] = {linha:0, coluna:3, peca: "q", cor: "l"}
        this.casas[7][4] = {linha:0, coluna:4, peca: "k", cor: "l"}
        this.casas[7][5] = {linha:0, coluna:5, peca: "b", cor: "l"}
        this.casas[7][6] = {linha:0, coluna:6, peca: "n", cor: "l"}
        this.casas[7][7] = {linha:0, coluna:7, peca: "r", cor: "l"}
    }

    instanciaMatrizDeCasas(){
        this.casas = []
        for(var i = 0; i < 8; i++) {
            this.casas[i] = new Array(8)
        }
    }

    renderizaTabuleiro(){

        var tabuleiro = document.createElement("table")

        var tbody = document.createElement("tbody")

        for(var linha of this.casas){

            var tr = document.createElement("tr")

            for(var casa of linha){
                
                var td =  document.createElement("td")

                if(this.ehCasaPreta(casa.linha, casa.coluna)) td.className = "bg-preto"

                if(casa.peca){
                    var img = document.createElement("img")

                    img.src = this.recuperaSpriteCasa(casa)

                    td.appendChild(img)
                }

                tr.appendChild(td)
            }

            tbody.appendChild(tr)
        }

        tabuleiro.appendChild(tbody)
        return tabuleiro
    }

    ehCasaPreta(linha, coluna){
        return ((linha % 2) == 0 & (coluna % 2) != 0) || ((linha % 2) != 0 & (coluna % 2) == 0)
    }

    recuperaSpriteCasa(casa){
        return "images/" + casa.peca + casa.cor + ".png"
    }

}