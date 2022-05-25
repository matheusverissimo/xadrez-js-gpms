class Peca{

    linha;
    coluna;
    cor;
    tipo;

    constructor(linha, coluna, cor, tipo){
        this.linha = linha;
        this.coluna = coluna;
        this.cor = cor;
        this.tipo = tipo;
    }

    getSpritePeca(){
        return "images/" + this.tipo + this.cor + ".png";
    }

    movimentada(linha, coluna){
        this.linha = linha
        this.coluna = coluna
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

    verificaSeEValidaEAdiciona(casa, casas, vetorRetorno){
        if(this.casaValidaParaMovimento(casa, casas)) vetorRetorno.push(casa)
    }
}