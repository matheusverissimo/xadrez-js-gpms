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

    getCasasAtacadas(casas){
        
        let casasAtacadas = []

        this.casaDentroDoTabuleiroEAdiciona({linha: this.linha - 2, coluna: this.coluna - 1}, casasAtacadas)
        this.casaDentroDoTabuleiroEAdiciona({linha: this.linha - 2, coluna: this.coluna + 1}, casasAtacadas)
        this.casaDentroDoTabuleiroEAdiciona({linha: this.linha - 1, coluna: this.coluna - 2}, casasAtacadas)
        this.casaDentroDoTabuleiroEAdiciona({linha: this.linha - 1, coluna: this.coluna + 2}, casasAtacadas)

        this.casaDentroDoTabuleiroEAdiciona({linha: this.linha + 2, coluna: this.coluna + 1}, casasAtacadas)
        this.casaDentroDoTabuleiroEAdiciona({linha: this.linha + 2, coluna: this.coluna - 1}, casasAtacadas)
        this.casaDentroDoTabuleiroEAdiciona({linha: this.linha + 1, coluna: this.coluna + 2}, casasAtacadas)
        this.casaDentroDoTabuleiroEAdiciona({linha: this.linha + 1, coluna: this.coluna - 2}, casasAtacadas)

        return casasAtacadas
    }

    casaDentroDoTabuleiroEAdiciona(casa, arrayCasas){
        if(casa.linha >= 0 && casa.linha < 8 && casa.coluna >= 0 && casa.coluna < 8)
            arrayCasas.push(casa)
    }
}