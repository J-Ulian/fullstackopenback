require('dotenv').config()

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Person = require('./models/person')


const requestLogger = (request, response, next) => {
  console.log("---");
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use(morgan("tiny"));
app.use(express.static('build'))



const generateId = () => {
  return Math.floor(Math.random() * 10000);
};

let persons = [{
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/info", (req, res) => {
  res.send(
    `<div><p>Phonebook has info for ${
      persons.length
    } people<p/><p>${Date()}</p></div>`
  );
});

app.get("/api/persons", (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
});

app.get("/api/persons/:id", (req, res) => {
  // const id = Number(req.params.id);
  //const person = persons.find(function (p) {
  //   //console.log(p.id, typeof p.id, id, typeof id, p.id === id);
  // return p.id === id;
  // });
  Person.findById(req.params.id).then(person => {
    res.json(person);
  })

});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      error: "name is missing",
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: "number is missing",
    });
  }
  const person = new Person({
    name: body.name,
    number: body.number,
    // id: generateId(),
  });
  //persons = persons.concat(person);
  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON())
  })
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({
    error: "unknown endpoint",
  });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});