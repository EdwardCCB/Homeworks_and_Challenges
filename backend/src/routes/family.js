const express = require('express');
const router = express.Router();


let familyTree = [];

// Ruta para añadir una nueva persona
router.post('/', (req, res) => {
    const { name, parentId } = req.body;
    const newPerson = { id: familyTree.length + 1, name, parentId };
    familyTree.push(newPerson);
    res.status(201).send({ message: 'Persona creada', person: newPerson });
});

// Ruta para obtener todas las personas
router.get('/', (req, res) => {
    res.send(familyTree);
});

// Ruta para obtener los hijos de una persona específica
router.get('/:id/children', (req, res) => {
    const parentId = parseInt(req.params.id);
    const children = familyTree.filter(person => person.parentId === parentId);

    if (children.length > 0) {
        res.send(children);
    } else {
        res.status(404).send({ message: 'No se encontraron hijos para esta persona' });
    }
});

module.exports = router;