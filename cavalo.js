class Cavalo extends Peca{

    constructor(linha, coluna, cor){
        super(linha, coluna, cor, "n")
    }

    getMovimentosPossiveis(casas){

        var casasPossiveis = []

        if(this.casaValidaParaMovimento({linha: this.linha - 2, coluna: this.coluna - 1}, casas))
            casasPossiveis.push({linha: this.linha - 2, coluna: this.coluna - 1})

        if(this.casaValidaParaMovimento({linha: this.linha - 2, coluna: this.coluna + 1}, casas))
            casasPossiveis.push({linha: this.linha - 2, coluna: this.coluna + 1})

        if(this.casaValidaParaMovimento({linha: this.linha - 1, coluna: this.coluna - 2}, casas))
            casasPossiveis.push({linha: this.linha - 1, coluna: this.coluna - 2})

        if(this.casaValidaParaMovimento({linha: this.linha - 1, coluna: this.coluna + 2}, casas))
            casasPossiveis.push({linha: this.linha - 1, coluna: this.coluna + 2})

        if(this.casaValidaParaMovimento({linha: this.linha + 2, coluna: this.coluna + 1}, casas))
            casasPossiveis.push({linha: this.linha + 2, coluna: this.coluna + 1})

        if(this.casaValidaParaMovimento({linha: this.linha + 2, coluna: this.coluna - 1}, casas))
            casasPossiveis.push({linha: this.linha + 2, coluna: this.coluna - 1})

        if(this.casaValidaParaMovimento({linha: this.linha + 1, coluna: this.coluna + 2}, casas))
            casasPossiveis.push({linha: this.linha + 1, coluna: this.coluna + 2})

        if(this.casaValidaParaMovimento({linha: this.linha + 1, coluna: this.coluna - 2}, casas))
            casasPossiveis.push({linha: this.linha + 1, coluna: this.coluna - 2})

        return casasPossiveis
    }

    casaTemPecaAliada(casa){
        return casa.peca.cor == this.cor
    }

    casaEstaVazia(casa){
        return casa.peca == null ? true : false
    }

    casaTemPecaAdversaria(casa){
        return casa.peca.cor != this.cor && casa.peca.tipo != "k"
    }

    casaDentroDoTabuleiro(casa){
        return casa.linha >= 0 && casa.linha < 8 && casa.coluna >= 0 && casa.coluna < 8
    }

    casaValidaParaMovimento(casa, casas){
        if(!this.casaDentroDoTabuleiro(casa)) return false
        var casaNoTabuleiro = casas[casa.linha][casa.coluna]
        if(this.casaEstaVazia(casaNoTabuleiro)) return true
        if(this.casaTemPecaAdversaria(casaNoTabuleiro)) return true
        if(this.casaTemPecaAliada(casaNoTabuleiro)) return false
    }
}