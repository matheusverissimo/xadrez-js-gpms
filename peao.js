class Peao extends Peca{

    jaMoveu;
    direcao = this.cor == "l" ? -1 : 1

    constructor(linha, coluna, cor){
        super(linha, coluna, cor, "p")
        this.jaMoveu = false;
    }

    getMovimentosPossiveis(casas){
        var casasPossiveis = []
        var direcao = this.direcao

        //verifica se pode andar para frente
        if(this.naoEstaNoFimDoTabuleiro() && this.naoHaPecaNaFrente(casas)) 
            casasPossiveis.push({linha: this.linha + direcao, coluna: this.coluna})

        //verifica se pode andar duas casas
        if(!this.jaMoveu && this.naoHaPecaNaFrente(casas) && this.naoHaPecaNoDestino(casas))
            casasPossiveis.push({linha: this.linha + direcao * 2, coluna: this.coluna})

        //verifica se pode comer peca para um lado
        if(this.coluna < 7){
            var casaComivel1 = casas[this.linha + direcao][this.coluna + 1]

            if(casaComivel1.peca && casaComivel1.peca.cor != this.cor){
                casasPossiveis.push({linha: casaComivel1.linha, coluna: casaComivel1.coluna})
            }
        }//verifica se pode comer peca para outro lado
        
        if(this.coluna > 0){
            var casaComivel2 = casas[this.linha + direcao][this.coluna - 1]

            if(casaComivel2.peca && casaComivel2.peca.cor != this.cor){
                casasPossiveis.push({linha: casaComivel2.linha, coluna: casaComivel2.coluna})
            }
        }

        return casasPossiveis;
    }

    getCasasAtacadas(casas){
        let casasAtacadas = []

        if(this.coluna > 0){
            let casa = {linha: this.linha + this.direcao, coluna: this.coluna - 1}
            if(this.casaDentroDoTabuleiro(casa)) casasAtacadas.push(casa)
        }
        
        if(this.coluna < 7) {
            let casa = {linha: this.linha + this.direcao, coluna: this.coluna + 1}
            if(this.casaDentroDoTabuleiro(casa)) casasAtacadas.push(casa)
        }

        return casasAtacadas
    }

    naoEstaNoFimDoTabuleiro(){
        return this.linha + this.direcao < 7 && this.linha + this.direcao > 0
    }
    
    naoHaPecaNaFrente(casas){
        return casas[this.linha + this.direcao][this.coluna].peca == null
    }

    naoHaPecaNoDestino(casas){ //verifica se nao ha peca na casa mais longe do primeiro movimento do peao
        return casas[this.linha + this.direcao * 2][this.coluna].peca == null
    }

    movimentada(linha, coluna){
        this.linha = linha
        this.coluna = coluna
        this.jaMoveu = true
    }
}