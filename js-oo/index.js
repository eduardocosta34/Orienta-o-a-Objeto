import User from "./User.js";
import Admin from "./admin.js";
import Docente from "./Docente.js";

const novoUser = new User ('Amanda', 'Bernades', 'amanda@local.com', '1998-06-09')
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas('Cassio', 'cassio@local.com')
console.log(dadosFicticios)

const novoAdmin = new Admin ('Rodrigo', 'Amaral', 'rodrigo.amaral@local.com', '1985-07-10')
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente ('Maria', 'Bernadete', 'maria.bernadete@local', '1975-09-12')
console.log(novoDocente.exibirInfos());


const novaUser = new User('Julia', 'Assis', 'julia.assis@local.com', '2000-01-01')
console.log(novaUser.exibirInfosCompletas('basic'));
console.log(novaUser.exibirInfosCompletas('complete'));