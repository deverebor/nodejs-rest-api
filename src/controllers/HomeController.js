import Aluno from '../models/Aluno';

class HomeController {
  async index(request, response) {
    const novoAluno = await Aluno.create({
      nome: 'Lucas',
      sobrenome: 'Souza',
      email: 'lucas@email.com',
      idade: 20,
      peso: 110,
      altura: 1.90,
    });
    response.json(novoAluno);
  }
}

export default new HomeController();
