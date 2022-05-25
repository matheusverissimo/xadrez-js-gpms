class Cavalo extends Peca{

    constructor(linha, coluna, cor){
        super(linha, coluna, cor, "n")
    }

    getMovimentosPossiveis(casas){

        var casasPossiveis = []

        this.verificaSeEValidaEAdiciona({linha: this.linha - 2, coluna: this.coluna - 1}, casas, casasPossiveis)
        this.verificaSeEValidaEAdiciona({linha: this.linha - 2, coluna: this.coluna + 1}, casas, casasPossiveis)
        this.verificaSeEValidaEAdiciona({linha: this.linha - 1, coluna: this.coluna - 2}, casas, casasPossiveis)
        this.verificaSeEValidaEAdiciona({linha: this.linha - 1, coluna: this.coluna + 2}, casas, casasPossiveis)

        this.verificaSeEValidaEAdiciona({linha: this.linha + 2, coluna: this.coluna + 1}, casas, casasPossiveis)
        this.verificaSeEValidaEAdiciona({linha: this.linha + 2, coluna: this.coluna - 1}, casas, casasPossiveis)
        this.verificaSeEValidaEAdiciona({linha: this.linha + 1, coluna: this.coluna + 2}, casas, casasPossiveis)
        this.verificaSeEValidaEAdiciona({linha: this.linha + 1, coluna: this.coluna - 2}, casas, casasPossiveis)

        return casasPossiveis
    }
}