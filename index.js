require('dotenv').config()

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Person = require('./models/person');
const {
  response
} = require('express');


const requestLogger = (request, response, next) => {
  console.log("---");
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

const app = express();

app.use(express.static('build'))
app.use(express.json());
app.use(cors());
app.use(requestLogger);
app.use(morgan("tiny"));




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
  Person.find().count(function (err, count) {
    res.send(
      `<div><p>Phonebook has info for ${
        count
      } people<p/><p>${Date()}</p></div>`
    );
  });


});

app.get("/api/persons", (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
});

app.get("/api/persons/:id", (request, response, next) => {
  // const id = Number(req.params.id);
  //const person = persons.find(function (p) {
  //   //console.log(p.id, typeof p.id, id, typeof id, p.id === id);
  // return p.id === id;
  // });
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))

});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(
      error => next(error)
    )
  // const id = Number(request.params.id);
  //persons = persons.filter((p) => p.id !== id);
  // response.status(204).end();
});

app.post("/api/persons", (request, response, next) => {
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
    .catch(
      error => next(error)
    )
});

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, {
      new: true
    })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({
    error: "unknown endpoint",
  });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === "CastError") {
    return response.status(400).send({
      error: "malformatted id"
    })
  } else if (error.name === "ValidationError") {
    return response.status(400).json({
      error: error.message
    })
  }

  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});