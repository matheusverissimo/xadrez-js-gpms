class Jogador{
    
    nome;
    timer;
    ehVezJogador;
    primeiro;
    ehIA

    constructor(nome, controleDeTempo, primeiro, IA){
        this.nome = nome;
        this.timer = 1000 * 60 * controleDeTempo
        this.ehVezJogador = true
        this.primeiro = primeiro
        this.ehIA = IA
    }

    render(){
        var div = document.createElement("div")
        div.className = "playersInfo"
        
        var nome = document.createElement("span")
        nome.innerText = this.nome
        nome.className = "nomeJogador"
        
        div.appendChild(nome)
        div.appendChild(document.createElement("br"))

        if(this.primeiro) div.style = "justify-content: end;"

        return div
    }
    
    setVezJogador(vez){
        this.ehVezJogador = vez
    }
}