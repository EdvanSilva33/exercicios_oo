
// Classe abstrata
function Cargo(vaga, nome, sobreNome, contratado){
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.cargo = vaga;

    this.nomeDaEmpresa = function(){
        console.log('\n HOTEL RIVERS \nApresenta seus novos colaboradores:');
       
    } 
    
}
  // Classes herdeiras
function Candidato(nome, sobreNome, vaga , valor){  

    Cargo.call(this, vaga);
    let _salario = valor;

    // boas praticas ultiliza getters e setters 
   this.getApresentacao = function(){
    return  `\nColaborador: ${nome}  \nSobre Nome: ${sobreNome} \nCargo de: ${vaga}\nSalario: R$ ${_salario}\n`;
}

}
function Mensageiro(nome, sobreNome){
    
    Candidato.call(this,nome, sobreNome, 'mensageiro', 2000);

}
function Gerente(nome, sobreNome){

    Candidato.call(this,nome, sobreNome, 'Gerente', 5300)
}
 // Instâncias de objetos
const colaborador1 = new Candidato('Francisco', 'Chagas', 'Recepcionista', 3530);
const colaborador2 = new Mensageiro('Jessica', 'Feritiz');
const colaborador3 = new Gerente('Thatiana', 'Almenida');

colaborador1.nomeDaEmpresa();


console.log(console.log(colaborador1.getApresentacao ()));
console.log(console.log(colaborador2.getApresentacao ()));
console.log(console.log(colaborador3.getApresentacao ()));
