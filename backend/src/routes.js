const express = require('express');
const ATMQueue = require('./ATMQueue');
const Person = require('./Person');

const router = express.Router();
const atmQueue = new ATMQueue();

// Ruta para añadir una persona a la cola
router.post('/enqueue', (req, res) => {
    const { name, amount, arrivalTime } = req.body;

    // Verificar que los campos obligatorios estén presentes
    if (!name || !amount || !arrivalTime) {
        return res.status(400).send({ message: 'Todos los campos son requeridos' });
    }

    const person = new Person(name, amount, arrivalTime);
    atmQueue.enqueue(person);
    res.status(201).send({ message: 'Persona añadida a la cola', person });
});

// Ruta para atender a la siguiente persona
router.get('/dequeue', (req, res) => {
    if (atmQueue.isEmpty()) {
        return res.status(404).send({ message: 'No hay personas en la cola para atender' });
    }
    const person = atmQueue.dequeue();
    res.send({ message: `Atendiendo a ${person.name}`, amount: person.amount });
});

// Ruta para obtener el tamaño de la cola
router.get('/size', (req, res) => {
    res.send({ size: atmQueue.size() });
});

// Ruta para ver la siguiente persona en la cola sin atenderla
router.get('/peek', (req, res) => {
    if (atmQueue.isEmpty()) {
        return res.status(404).send({ message: 'No hay personas en la cola' });
    }
    const person = atmQueue.peek();
    res.send({ message: `Próxima persona en la cola: ${person.name}`, person });
});

module.exports = router;