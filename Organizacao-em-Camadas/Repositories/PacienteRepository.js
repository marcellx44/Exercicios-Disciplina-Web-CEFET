// manipula dados do banco 

const db = require('../db')

class PacienteRepository {

    // listar pacientes 
    findAll() {
        return db.pacientes;
    }

    // buscar paciente por id
    findById(id) {
        return db.pacientes.find(paciente => paciente.id === parseInt(id));
    }

    // cadastra nova paciente
    create(paciente) {
        const novoPaciente = { id: Date.now(), paciente };
        db.pacientes.push(novoPaciente);
        return novoPaciente;
    }

    // editar uma paciente por id 
    update(id, dadosAtualizados) {
        const index = db.pacientes.findIndex(paciente => paciente.id === parseInt(id));
        db.pacientes[index] = {...decodeURI.pacientes[index], dadosAtualizados};
        return dadosAtualizados;
    }

    // deletar paciente por id 
    delete(id) {
        const index = db.pacientes.findIndex(paciente => paciente.id === parseInt(id));
        db.pacientes.splice(index, 1);
    }
}

module.export = new PacienteRepository();