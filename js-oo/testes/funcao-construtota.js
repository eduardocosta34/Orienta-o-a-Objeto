//funcão construtora

function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function () {
        return `${nome}, ${email}`

    }
    
}

const newUser = new User('Mariana', 'm@m.com')
console.log(newUser)
console.log(newUser.exibeInfos())