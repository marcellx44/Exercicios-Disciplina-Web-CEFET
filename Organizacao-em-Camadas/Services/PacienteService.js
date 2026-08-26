const PacienteRepository = require('../Repositories/PacienteRepository');
const ConsultaRepository = require('../Repositories/ConsultaRepository');

class PacienteService {

    listarTodos() {
        return PacienteRepository.findAll();
    }

    cadastrar(dados) {
        return PacienteRepository.create(dados);
    }

    buscarPorId(id) {
        const paciente = PacienteRepository.findById(id);

        if (!paciente) {
            throw new Error('Paciente não encontrado');
        }

        const consultas = ConsultaRepository.findAll().filter(c => c.pacienteId === parseInt(id));

        return {
            ...paciente,
            consultas: consultas
        };
    }

    atualizar(id, dados) {
        return PacienteRepository.update(id, dados);
    }

    atualizarParcial(id, dadosParciais) {
        return PacienteRepository.update(id, dadosParciais);
    }

    remover(id) {
        return PacienteRepository.delete(id);
    }
}

module.exports = new PacienteService();