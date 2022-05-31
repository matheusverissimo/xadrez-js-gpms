class Dama extends Peca{

    constructor(linha, coluna, cor){
        super(linha, coluna, cor, "q")
    }

    getMovimentosPossiveis(casas){
        
        var casasPossiveis = []

        //movimentos dos bispos + torre (ctrl c ctrl v)
        //torre 
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

        //bispo
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

        for(var itColuna = this.linha - 1; itColuna >= 0; itColuna--){
            var casa = {linha: itColuna, coluna: this.coluna}
            
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(casas[casa.linha][casa.coluna].peca == null){
                casasAtacadas.push(casa)
            }
            else {
                casasAtacadas.push(casa)
                break;
            }
        }

        for(var itColuna = this.linha + 1; itColuna < 8; itColuna++){
            var casa = {linha: itColuna, coluna: this.coluna}
            
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(casas[casa.linha][casa.coluna].peca == null){
                casasAtacadas.push(casa)
            }
            else {
                casasAtacadas.push(casa)
                break;
            }
        }

        for(var itColuna = this.coluna - 1; itColuna >= 0; itColuna--){
            var casa = {linha: this.linha, coluna: itColuna}
            
            if(!this.casaDentroDoTabuleiro(casa)) break;

            if(casas[casa.linha][casa.coluna].peca == null){
                casasAtacadas.push(casa)
            }
            else {
                casasAtacadas.push(casa)
                break;
            }
        }

        for(var itColuna = this.coluna + 1; itColuna < 8; itColuna++){
            var casa = {linha: this.linha, coluna: itColuna}
            
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