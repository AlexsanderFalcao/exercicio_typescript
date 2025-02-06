interface Operacao {
    calcular(): number;
  }
  
  class Multiplicacao implements Operacao {
    private readonly x: number;
    private readonly y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
    calcular(): number {
      return this.x * this.y;
    }
  }
  
  function exibirResultado(operacao: Operacao): void {
    console.log(`Resultado da operação: ${operacao.calcular()}`);
  }
  
  class Saudacao {
    private readonly nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    saudar(): string {
      const mensagem = `Olá, ${this.nome}! Espero que você esteja bem.`;
      return mensagem;
    }
  }

  const multiplicacao = new Multiplicacao(5, 7);
  exibirResultado(multiplicacao);
  
  const saudacao = new Saudacao("Alexsander");
  console.log(saudacao.saudar());  