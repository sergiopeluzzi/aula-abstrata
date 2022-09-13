"use strict";
//Classes Abstratas
class Conta {
    constructor(ag, num, saldo) {
        this.ag = ag;
        this.num = num;
        this.saldo = saldo;
    }
    save() {
    }
    update() {
    }
    delete() {
    }
}
class Pessoa {
    constructor(nome) {
        this.nome = nome;
        this.ativo = true;
    }
    save() {
    }
    update() {
    }
    delete() {
    }
}
class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome);
        this.cpf = cpf;
    }
}
class PessoaJuridica extends Pessoa {
    constructor(nome, cnpj) {
        super(nome);
        this.cnpj = cnpj;
    }
}
const pessFis1 = new PessoaFisica("Nome da Pessoa", "111.111.111-11");
const pessJur1 = new PessoaJuridica("Nome da Empresa", "11.111.111/0001-11");
//Metodos estaticos
class DateHelper {
    static mostraHoraAtual() {
        console.log(Date.now());
    }
    mostraDia() {
        console.log(new Date().toISOString());
    }
}
const data = new DateHelper();
data.mostraDia();
DateHelper.mostraHoraAtual(320, "RS", "USD");
