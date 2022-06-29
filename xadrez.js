class Xadrez{
    jogadores;
    tabuleiro;
    estado; //Selecionando peça ou selecionando jogada
    jogadorTurno;
    divPrincipal;
    
    timerJogador1;

    constructor(nomeJogador1, nomeJogador2, controleDeTempo, contraIA){
        this.jogadores = []
        this.jogadores[0] = new Jogador(nomeJogador1, controleDeTempo, true, false)
        this.jogadores[1] = new Jogador(nomeJogador2, controleDeTempo, false, false)
        if(contraIA)
            this.jogadores[1] = new Jogador("IA", controleDeTempo, false, true)
        this.divPrincipal = document.createElement("div")
        this.tabuleiro = new Tabuleiro(this.divPrincipal, contraIA)
        this.jogadorTurno = 0
    }

    render(){
        this.divPrincipal.className = "tabuleiro"
        this.divPrincipal.id = "tabuleiro"
        this.tabuleiro.render()
        this.divPrincipal.prepend(this.jogadores[0].render())
        this.divPrincipal.appendChild(this.jogadores[1].render())
        return this.divPrincipal
    }
}