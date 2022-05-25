class Torre extends Peca{

    constructor(linha, coluna, cor){
        super(linha, coluna, cor, "r")
    }

    getMovimentosPossiveis(casas){

        var casasPossiveis = []

        for(var itColuna = this.linha - 1; itColuna >= 0; itColuna--){
            var casa = {linha: itColuna, coluna: this.coluna}
            if(this.casaValidaParaMovimento(casa, casas)){
                casasPossiveis.push(casa)
                if(casas[casa.linha][casa.coluna].peca != null) break;
            }
            else break
        }

        for(var itColuna = this.linha + 1; itColuna < 8; itColuna++){
            var casa = {linha: itColuna, coluna: this.coluna}
            if(this.casaValidaParaMovimento(casa, casas)){
                casasPossiveis.push(casa)
                if(casas[casa.linha][casa.coluna].peca != null) break;
            }
            else break
        }

        for(var itColuna = this.coluna - 1; itColuna >= 0; itColuna--){
            var casa = {linha: this.linha, coluna: itColuna}
            if(this.casaValidaParaMovimento(casa, casas)){
                casasPossiveis.push(casa)
                if(casas[casa.linha][casa.coluna].peca != null) break;
            }
            else break
        }

        for(var itColuna = this.coluna + 1; itColuna < 8; itColuna++){
            var casa = {linha: this.linha, coluna: itColuna}
            if(this.casaValidaParaMovimento(casa, casas)){
                casasPossiveis.push(casa)
                if(casas[casa.linha][casa.coluna].peca != null) break;
            }
            else break
        }

        return casasPossiveis
    }
}