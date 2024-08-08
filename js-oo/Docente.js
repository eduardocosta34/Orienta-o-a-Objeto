import User from "./User.js";

export default  class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    aprovarEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado no curso de ${curso}, responsálvel ${this.nome}.`
    }

    
    exibirInfos () {
        const infos = super.exibirInfos()
        return  `${infos} - DOCENTE`
    }
}

// const novaDocente = new Docente('Ana Maria', 'anamaria@local.com', '1988-04-07')

// console.log(novaDocente.aprovarEstudante('Eduardo', 'Java'));

