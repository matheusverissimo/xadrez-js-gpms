class Rei extends Peca{

    corOposta;

    constructor(linha, coluna, cor){
        super(linha, coluna, cor, "k")
        this.corOposta = cor == "d" ? "l" : "d"
    }

    getMovimentosPossiveis(casas){
        var casasPossiveis = []
        //mais complexo, pois nao pode andar por casas atacadas wip

        for(let coluna = this.coluna - 1; coluna <= this.coluna + 1; coluna++)
            for(let linha = this.linha - 1; linha <= this.linha + 1; linha++){
                let casa = {linha: linha, coluna: coluna}
                if(coluna == 0 && linha == 0) continue

                if(this.casaValidaParaMovimento(casa, casas) && this.casaNaoEstaSendoAtacadaPeloOponente(casa, casas)) 
                    casasPossiveis.push(casa)
            }

        return casasPossiveis
    }

    getCasasAtacadas(casas){
        let casasAtacadas = []

        for(let coluna = this.coluna - 1; coluna <= this.coluna + 1; coluna++)
            for(let linha = this.linha - 1; linha <= this.linha + 1; linha++){
                let casa = {linha: linha, coluna: coluna}

                if(this.casaDentroDoTabuleiro(casa)) 
                    casasAtacadas.push(casa)
            }

        return casasAtacadas
    }

    casaNaoEstaSendoAtacadaPeloOponente(casa, casas){
        return casas[casa.linha][casa.coluna].atacada.indexOf(this.corOposta) == -1
    }
}