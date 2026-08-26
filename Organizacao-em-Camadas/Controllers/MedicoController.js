const MedicoService = require('../Services/MedicoService')

class MedicoController {

    getAll(req, res) {
        const medicos = MedicoService.listarTodos()
        res.status(200).json(medicos);
    }

    // buscar por id 

    getById(req, res) {
        const { id } = req.params;
        const medico = MedicoService.buscarPorId(id);
        if (!medico) {
            res.status(400).json({ error: "Aluno não encontrado." })
        }
    }

    // cadastrar um médico 
    create(req, res) {
        try {
            const novoMedico = MedicoService.cadastrar(req.body);
            res.status(200).json(novoMedico);
        } catch (error) {
            res.status(400).json({ error: "Não foi possível cadastrar este médico." });
        }
    }

    // atualiza dados do médico 
    update(req, res) {
        try {
            const { id } = req.params;
            const medicoAtualizado = MedicoService.atualizar(id, req.body);
            res.status(200).json(medicoAtualizado);
        } catch (error) {
            res.status(400).json({ error: "Não foi possível atualizar os dados deste médico." });
        }
    }

    // atualiza parcialmente dados do médico (PATCH) 
    patch(req, res) {
        try {
            const { id } = req.params;
            const medicoAtualizado = MedicoService.atualizarParcial(id, req.body);
            res.status(200).json(medicoAtualizado);
        } catch (error) {
            res.status(400).json({ error: "Não foi possível atualizar os dados deste médico." });
        }
    }

    // deleta médico por id 
    delete(req, res) {
        try {
            const { id } = req.body;
            MedicoService.remover(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: "Não foi possível deletar este médico." });
        }
    }

}

module.exports = new MedicoController();