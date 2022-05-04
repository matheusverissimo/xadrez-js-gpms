  class Peca{
  linha;
  coluna;
  tipo;
  ehBranco;
  imagemSrc;

  getImagem() {
    if (this.ehBranco) {
        this.imagemSrc =  "../images/" + this.tipo + 'l' + ".png";
    } else {
        this.imagemSrc =  "../images/" + this.tipo + 'd' + ".png";
    }
  }
}