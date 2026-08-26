// Camada responsável por manipular os dados 

const db = require('../db');

class MedicoRepository {

    // listar médicos 
    findAll() {
        return db.medicos;
    }

    // buscar médico por id 
    findById(id) {
        return db.medicos.find(medico => medico.medicoId === parseInt(id));
    }

    // cadastra um novo médico 
    create(medico) {
        const novoMedico = { medicoId: Date.now(), ...medico };
        db.medicos.push(novoMedico);
        return novoMedico;
    }

    // atualizar dados do médico 
    update(id, dadosAtualizados) {
        const index = db.medicos.findIndex(medico => medico.medicoId === parseInt(id));

        if (index === -1) {
            return null;
        }

        db.medicos[index] = { ...db.medicos[index], ...dadosAtualizados };
        return db.medicos[index];
    }

    // remove médico 
    delete(id) {
        const index = db.medicos.findIndex(medico => medico.medicoId === parseInt(id));

        if (index === -1) {
            return null;
        }

        db.medicos.splice(index, 1);
    }
}

module.exports = new MedicoRepository();