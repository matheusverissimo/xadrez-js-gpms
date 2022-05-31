class Bispo extends Peca{

    constructor(linha, coluna, cor){
        super(linha, coluna, cor, "b")
    }

    getMovimentosPossiveis(casas){

        var casasPossiveis = []

        for(var it = -1;;it--){
            var casa = {linha: this.linha + it, coluna: this.coluna + it}
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(this.casaValidaParaMovimento(casa, casas)){
                casasPossiveis.push(casa)
                if(casas[casa.linha][casa.coluna].peca != null) break;
            }
            else break
        }

        for(var it = -1;;it--){
            var casa = {linha: this.linha + it, coluna: this.coluna - it}
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(this.casaValidaParaMovimento(casa, casas)){
                casasPossiveis.push(casa)
                if(casas[casa.linha][casa.coluna].peca != null) break;
            }
            else break
        }

        for(var it = 1;;it++){
            var casa = {linha: this.linha + it, coluna: this.coluna + it}
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(this.casaValidaParaMovimento(casa, casas)){
                casasPossiveis.push(casa)
                if(casas[casa.linha][casa.coluna].peca != null) break;
            }
            else break
        }

        for(var it = 1;;it++){
            var casa = {linha: this.linha + it, coluna: this.coluna - it}
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(this.casaValidaParaMovimento(casa, casas)){
                casasPossiveis.push(casa)
                if(casas[casa.linha][casa.coluna].peca != null) break;
            }
            else break
        }

        return casasPossiveis
    }

    getCasasAtacadas(casas){
        let casasAtacadas = []

        for(var it = -1;;it--){
            var casa = {linha: this.linha + it, coluna: this.coluna + it}
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(casas[casa.linha][casa.coluna].peca == null){
                casasAtacadas.push(casa)
            }
            else {
                casasAtacadas.push(casa)
                break;
            }
        }

        for(var it = -1;;it--){
            var casa = {linha: this.linha + it, coluna: this.coluna - it}
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(casas[casa.linha][casa.coluna].peca == null){
                casasAtacadas.push(casa)
            }
            else {
                casasAtacadas.push(casa)
                break;
            }
        }

        for(var it = 1;;it++){
            var casa = {linha: this.linha + it, coluna: this.coluna + it}
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(casas[casa.linha][casa.coluna].peca == null){
                casasAtacadas.push(casa)
            }
            else {
                casasAtacadas.push(casa)
                break;
            }
        }

        for(var it = 1;;it++){
            var casa = {linha: this.linha + it, coluna: this.coluna - it}
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(casas[casa.linha][casa.coluna].peca == null){
                casasAtacadas.push(casa)
            }
            else {
                casasAtacadas.push(casa)
                break;
            }
        }

        return casasAtacadas
    }
}