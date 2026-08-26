const PacienteService = require('../Services/PacienteService');

class PacienteController {

    getAll(req, res) {
        const pacientes = PacienteService.listarTodos();
        res.status(200).json(pacientes);
    }

    // buscar por id (com consultas)
    getById(req, res) {
        try {
            const { id } = req.params;
            const paciente = PacienteService.buscarPorId(id);
            res.status(200).json(paciente);
        } catch (error) {
            res.status(404).json({ error: "Paciente não encontrado." });
        }
    }

    // cadastrar um paciente
    create(req, res) {
        try {
            const novoPaciente = PacienteService.cadastrar(req.body);
            res.status(201).json(novoPaciente);
        } catch (error) {
            res.status(400).json({ error: "Não foi possível cadastrar este paciente." });
        }
    }

    // atualiza dados do paciente
    update(req, res) {
        try {
            const { id } = req.params;
            const pacienteAtualizado = PacienteService.atualizar(id, req.body);
            res.status(200).json(pacienteAtualizado);
        } catch (error) {
            res.status(400).json({ error: "Não foi possível atualizar os dados deste paciente." });
        }
    }

    // atualiza parcialmente dados do paciente (PATCH)
    patch(req, res) {
        try {
            const { id } = req.params;
            const pacienteAtualizado = PacienteService.atualizarParcial(id, req.body);
            res.status(200).json(pacienteAtualizado);
        } catch (error) {
            res.status(400).json({ error: "Não foi possível atualizar os dados deste paciente." });
        }
    }

    // deleta paciente por id
    delete(req, res) {
        try {
            const { id } = req.params;
            PacienteService.remover(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: "Não foi possível deletar este paciente." });
        }
    }

}

module.exports = new PacienteController();