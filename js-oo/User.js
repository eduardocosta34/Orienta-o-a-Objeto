export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    // #montaObjUser(){
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo,
    //     })
    // }

    
    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
      }

    get sobrenome() {
        return this.#sobrenome
    }
    
    get email () {
        return this.#email
    }

        get nascimento () {
        return this.#nascimento
    }
    
    get role () {
        return this.#role
    }
    
    get ativo () {
        return this.#ativo
    }

    set nome(novoNome){
        if (novoNome === ""){
            throw new Error("formato do nome não é valido");
        }

        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome
        
    }
    
    exibirInfos(){
        return  `Nome: ${this.nome}, E-mail: ${this.email}`
    }

    exibirInfosCompletas(tipoInfo) {
        if (tipoInfo === "basic") {
          return `dados básicos: ${this.nome}`
        }
        if (tipoInfo === "complete") {
          return `dados completos: ${this.nome}, ${this.email}, ${this.nascimento}`
        }
      }

    // exibirInfos() {
    //     if (this.role === "estudante") {
    //       return `dados estudante: ${this.nome}`
    //     }
    //     if (this.role === "admin") {
    //       return `dados admin: ${this.nome}, ${this.role}`
    //     }
    //     if (this.role === "docente") {
    //       return `dados docente: ${this.nome}, ${this.email}`
    //     }
    // }

    static exibirInfosGenericas (nome, email){
        return `${nome}, ${email}`
    }

}




// const novoUser = new User ('Juliana', 'ju@local.com', '2000-01-02') 
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
// console.log(novoUser.nome) //'Juliana'


// novoUser.nome = 'Juliana Silva Souza'
// console.log(novoUser.nome) //'Juliana'
// console.log(novoUser.sobrenome) //'Silva Souza'