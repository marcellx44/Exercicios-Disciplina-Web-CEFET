const MedicoRepository = require('../Repositories/MedicoRepository');
const ConsultaRepository = require('../Repositories/ConsultaRepository');

class MedicoService {

    listarTodos() {
        return MedicoRepository.findAll();
    }

    cadastrar(dados) {
        return MedicoRepository.create(dados);
    }


    buscarPorId(id) {
        const medico = MedicoRepository.findById(id);

        if (!medico) {
           throw new Error('Médico não encontrado');
        }

        const consultas = ConsultaRepository.findAll().filter(c => c.medicoId === id);

        return {
            ...medico,
            consultas: consultas
        };
    }

    atualizar(id, dados) {
        return MedicoRepository.update(id, dados);
    }

    atualizarParcial(id, dadosParciais) {
        return MedicoRepository.update(id, dadosParciais);
    }

    remover(id) {
        return MedicoRepository.delete(id);
    }
}

module.exports = new MedicoService();