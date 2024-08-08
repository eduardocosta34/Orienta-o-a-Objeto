const user = {
    nome: 'Juliana',
    email: 'juliana@local.com',
    nascimento: '2000-01-05',
    role: 'estudante',
    ativo: true, //por padrão
    exibirInfos: function(){
        console.log(this.nome, this.email);
    },
}

const admin = {
    nome: 'Mariana',
    email: 'mariana@local.com',
    nascimento: '1990-04-11',
    role: 'admin',
    ativo: true,
    criarCurso: function(){
        console.log('Curso Criado');
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()