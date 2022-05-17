class Xadrez{
    jogadores;
    tabuleiro;
    estado; //Selecionando peça ou selecionando jogada
    jogadorTurno;
    divPrincipal;
    
    timerJogador1;

    constructor(nomeJogador1, nomeJogador2, controleDeTempo){
        this.jogadores = []
        this.jogadores[0] = new Jogador(nomeJogador1, controleDeTempo)
        this.jogadores[1] = new Jogador(nomeJogador2, controleDeTempo)
        this.divPrincipal = document.createElement("div")
        this.tabuleiro = new Tabuleiro(this.divPrincipal)
        this.jogadorTurno = 0
    }

    render(){
        this.tabuleiro.render()
        this.divPrincipal.appendChild(this.jogadores[0].render())
        this.divPrincipal.appendChild(this.jogadores[1].render())
        return this.divPrincipal
    }
}