  class Peca{
  linha;
  coluna;
  tipo;
  ehBranco;
  imagemSrc;

  getImagem() {
    console.log('teste')
    if (this.ehBranca) {
        console.log('testeBranca')
        this.imagemSrc =  "../images/" + this.tipo + 'd' + ".png";
    } else {
        console.log('testePreta')
        this.imagemSrc =  "../images/" + this.tipo + 'l' + ".png";
    }
  }
}