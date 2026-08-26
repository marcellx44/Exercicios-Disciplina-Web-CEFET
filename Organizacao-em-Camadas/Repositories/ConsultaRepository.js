// manipula dados do banco 

const db = require('../db')

class ConsultaRepository {

    // listar consultas 
    findAll() {
        return db.consultas;
    }

    // buscar consulta por id
    findById(id) {
        return db.consultas.find(consulta => consulta.id === parseInt(id));
    }

    // cadastra nova consulta
    create(consulta) {
        const novaConsulta = { id: Date.now(), consulta };
        db.consultas.push(novaConsulta);
        return novaConsulta;
    }

    // editar uma consulta por id 
    update(id, dadosAtualizados) {
        const index = db.consultas.findIndex(consulta => consulta.id === parseInt(id));

        if (index === -1) {
            return null;
        }

        db.consultas[index] = { ...db.consultas[index], ...dadosAtualizados };
        return dadosAtualizados;
    }

    // deletar consulta por id 
    delete(id) {
        const index = db.consultas.findIndex(consulta => consulta.id === parseInt(id));

        if (index === -1) {
            return null;
        }

        db.consultas.splice(index, 1);
    }
}

module.exports = new ConsultaRepository();