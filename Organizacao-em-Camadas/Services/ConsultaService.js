const ConsultaRepository = require('../Repositories/ConsultaRepository')

class ConsultaService {

    listarTodos() {
        return ConsultaRepository.findAll();
    }

    buscarPorId(id) {
        return ConsultaRepository.findById(id);
    }

    criarConsulta(dados) {
        const consultas = ConsultaRepository.findAll();

        const horarioOcupado = consultas.some(consulta => consulta.medicoId === dados.medicoId && consulta.data === dados.data);

        if (horarioOcupado) {
            throw new Error('O médico já possui uma consulta marcada nesse horário');
        }

        return ConsultaRepository.create(dados);
    }

    atualizarConsulta(id, dadosAtualizados) {
        return ConsultaRepository.update(id, dadosAtualizados);
    }

    atualizarParcial(id, dadosParciais) {
        return ConsultaRepository.update(id, dadosParciais);
    }

    removerConsulta(id) {
        return ConsultaRepository.delete(id);
    }
}

module.exports = new ConsultaService();