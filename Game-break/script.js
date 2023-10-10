class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    let ataque
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia'
        break
      case 'guerreiro':
        ataque = 'espada'
        break
      case 'monge':
        ataque = 'artes marciais'
        break
      case 'ninja':
        ataque = 'shuriken'
        break
      default:
        ataque = 'atacou'
    }

    return `o ${this.tipo} atacou usando ${ataque}`
  }
}

document.getElementById('atacarBtn').addEventListener('click', function () {
  const nome = document.getElementById('nome').value
  const idade = document.getElementById('idade').value
  const tipo = document.getElementById('tipo').value

  const heroi = new Hero(nome, idade, tipo)
  const resultado = heroi.atacar()

  document.getElementById('resultado').textContent = resultado
})
