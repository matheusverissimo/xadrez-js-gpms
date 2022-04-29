import {Tabuleiro} from "./tabuleiro";

export default class Xadrez{
    jogadores;
    tabuleiro;
    estado; //Selecionando peça ou selecionando jogada
    jogadorTurno;
    
    timerJogador1;

    constructor(nomeJogador1, nomeJogador2, controleDeTempo){
        this.jogadores = []
        this.jogadores[0] = new Jogador(nomeJogador1, controleDeTempo)
        this.jogadores[1] = new Jogador(nomeJogador2, controleDeTempo)
        this.tabuleiro = new Tabuleiro();
        this.jogadorTurno = 0
    }

    render(){
        var divPrincipal = document.createElement("div")
        divPrincipal.appendChild(this.tabuleiro.render())
        divPrincipal.appendChild(this.jogadores[0].render())
        divPrincipal.appendChild(this.jogadores[1].render())
        return divPrincipal
    }
}