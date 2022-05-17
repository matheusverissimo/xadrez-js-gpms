class Peao extends Peca{

    jaMoveu;

    constructor(linha, coluna, cor){
        super(linha, coluna, cor, "p")
        this.jaMoveu = false;
    }

    getMovimentosPossiveis(casas){
        var casasPossiveis = []
        var direcao = this.cor == "l" ? -1 : 1
        if(this.linha + direcao < 7 && this.linha + direcao > 0 && casas[this.linha + direcao][this.coluna].peca == null) 
            casasPossiveis.push({linha: this.linha + direcao, coluna: this.coluna})
        if(!this.jaMoveu && casas[this.linha + direcao][this.coluna].peca == null)
            casasPossiveis.push({linha: this.linha + direcao * 2, coluna: this.coluna})

        if(this.coluna < 7){
            var casaComivel1 = casas[this.linha + direcao][this.coluna + 1]
            console.log("1:")
            console.log(casaComivel1)

            if(casaComivel1.peca && casaComivel1.peca.cor != this.cor){
                casasPossiveis.push({linha: casaComivel1.linha, coluna: casaComivel1.coluna})
            }
        }
        
        if(this.coluna > 0){
            var casaComivel2 = casas[this.linha + direcao][this.coluna - 1]
            console.log("2:")
            console.log(casaComivel2)
            if(casaComivel2.peca && casaComivel2.peca.cor != this.cor){
                casasPossiveis.push({linha: casaComivel2.linha, coluna: casaComivel2.coluna})
            }
        }

        return casasPossiveis;
    }
}