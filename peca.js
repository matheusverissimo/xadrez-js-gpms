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
}