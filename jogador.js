class Jogador{
    
    nome;
    timer;
    ehVezJogador;

    constructor(nome, controleDeTempo){
        this.nome = nome;
        this.timer = 1000 * 60 * controleDeTempo
        this.ehVezJogador = true
    }

    render(){
        var div = document.createElement("div")
        
        var nome = document.createElement("span")
        nome.innerText = this.nome
        nome.className = "nomeJogador"
        
        var timer = document.createElement("span")
        timer.className = "timer"
        
        div.appendChild(nome)
        div.appendChild(timer)

        setInterval(()=>{
            timer.innerText = this.timer / 1000
            if(this.ehVezJogador && this.timer > 0) this.timer -= 1000
        }, 1000)

        return div
    }
    
    setVezJogador(vez){
        this.ehVezJogador = vez
    }
}