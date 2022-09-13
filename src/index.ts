//Interfaces
interface IDatabase {
    save(): void;
    update(): void;
    delete(): void;
} 

interface IPessoa {
    nome: string;
    ativo: boolean;
}

interface IConta {
    ag: number;
    num: number;
    saldo: number;
}

//Classes Abstratas
abstract class Conta implements IConta, IDatabase {
    ag: number;
    num: number;
    saldo: number;

    constructor(ag: number, num: number, saldo: number) {
        this.ag = ag;
        this.num = num;
        this.saldo = saldo;
    }

    save(): void {
        
    }

    update(): void {
        
    }

    delete(): void {
        
    }

}

abstract class Pessoa implements IPessoa, IDatabase {
    nome: string;
    ativo: boolean;

    constructor(nome: string) {
        this.nome = nome;
        this.ativo = true;
    }

    save(): void {
        
    }

    update(): void {
        
    }

    delete(): void {
        
    }

}

class PessoaFisica extends Pessoa {
    cpf: string;

    constructor(nome: string, cpf: string) {
        super(nome)
        this.cpf = cpf
    }
}

class PessoaJuridica extends Pessoa {
    cnpj: string;

    constructor(nome: string, cnpj: string) {
        super(nome)
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

const data = new DateHelper()
data.mostraDia()

DateHelper.mostraHoraAtual(320, "RS", "USD")