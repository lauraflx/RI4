export function criarGetters(classe, atributos) {
  for (const attr of atributos) {
    classe.prototype[`get${attr[0].toUpperCase()}${attr.slice(1)}`] = function () {
      return this[attr];
    };
    classe.prototype[`get${attr[0].toUpperCase()}${attr.slice(1)}Upper`] = function () {
      return String(this[attr]).toUpperCase();
    };
    classe.prototype[`get${attr[0].toUpperCase()}${attr.slice(1)}Lower`] = function () {
      return String(this[attr]).toLowerCase();
    };
  }
}

export class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
  }
  toString() {
    return `(${this.ddd}) ${this.numero}`;
  }
}
criarGetters(Telefone, ["ddd", "numero"]);

export class Endereco {
  constructor(rua, numero, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
  }
  toString() {
    return `${this.rua}, ${this.numero} - ${this.cidade} - ${this.estado}`;
  }
}
criarGetters(Endereco, ["rua", "numero", "cidade", "estado"]);

export class Cliente {
  #cpf;
  constructor(nome, cpf, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefones = new Set();
    this.#cpf = cpf; 
  }

  getCpf() { return this.#cpf; }
  getCpfUpper() { return String(this.#cpf).toUpperCase(); }
  getCpfLower() { return String(this.#cpf).toLowerCase(); }

  adicionarTelefone(telefone) { this.telefones.add(telefone); }
  removerTelefone(telefone) { this.telefones.delete(telefone); }

  descricao() {
    const telefonesStr = [...this.telefones].map(t => t.toString()).join(", ");
    return `Nome: ${this.getNome()}
CPF: ${this.getCpf()}
Endereço: ${this.endereco.toString()}
Telefones: ${telefonesStr}`;
  }
}
criarGetters(Cliente, ["nome"]);

export class Empresa {
  #cnpj;
  constructor(razaoSocial, nomeFantasia, cnpj) {
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.#cnpj = cnpj; 
    this.clientes = [];
  }

  getCnpj() { return this.#cnpj; }
  getCnpjUpper() { return String(this.#cnpj).toUpperCase(); }
  getCnpjLower() { return String(this.#cnpj).toLowerCase(); }

  adicionarCliente(cliente) { this.clientes.push(cliente); }

  detalhes() {
    const cabecalho = `Razão Social: ${this.getRazaoSocial()}
Nome Fantasia: ${this.getNomeFantasia()}
CNPJ: ${this.getCnpj()}
-------------------------`;
    const blocosClientes = this.clientes.map(c => c.descricao()).join("\n\n");
    return `${cabecalho}\n${blocosClientes}`;
  }
}
criarGetters(Empresa, ["razaoSocial", "nomeFantasia"]);
