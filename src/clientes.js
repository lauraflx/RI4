import { Empresa, Cliente, Telefone, Endereco } from "./index.js";

const empresa = new Empresa("ABC LTDA", "Mercado Online", "12845678090199");

const Joseane = new Cliente("Joseane", "7657905643",
  new Endereco("Bosque dos Laranjais", "987", "Rio Verde", "GO"));
Joseane.adicionarTelefone(new Telefone("64", "99999-9999"));
Joseane.adicionarTelefone(new Telefone("64", "3232-1111"));

const Fernanda = new Cliente("Fernanda", "987654337852",
  new Endereco("Parque Morada do Sol", "412", "Rio Verde", "GO"));
Fernanda.adicionarTelefone(new Telefone("64", "88888-8888"));
Fernanda.adicionarTelefone(new Telefone("64", "3232-2222"));

const Leticia = new Cliente("Letícia", "33567839133",
  new Endereco("Córrego do Sapo", "789", "Rio Verde", "GO"));
Leticia.adicionarTelefone(new Telefone("64", "77777-7777"));
Leticia.adicionarTelefone(new Telefone("64", "3232-3333"));

const Sara = new Cliente("Sara", "459444093844",
  new Endereco("Avenida Campestre", "452", "Rio Verde", "GO"));
Sara.adicionarTelefone(new Telefone("64", "66666-6666"));
Sara.adicionarTelefone(new Telefone("64", "3232-4444"));

const Bianca = new Cliente("Bianca", "098776423574",
  new Endereco("Recanto dos Bosques", "673", "Rio Verde", "GO"));
Bianca.adicionarTelefone(new Telefone("64", "55555-5555"));
Bianca.adicionarTelefone(new Telefone("64", "3232-5555"));

[Joseane, Fernanda, Leticia, Sara, Bianca].forEach(c => empresa.adicionarCliente(c));

console.log(empresa.detalhes());
