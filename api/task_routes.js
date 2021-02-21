const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Task = require('../api/task_model');

router.get('/', (req, res, next) => {
  Task.find()
    .select('name dt reminder _id')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        tasks: docs.map((doc) => {
          return {
            name: doc.name,
            dt: doc.dt,
            reminder: doc.reminder,
            _id: doc._id,
          };
        }),
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/', (req, res, next) => {
  const task = new Task({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    dt: req.body.dt,
    reminder: req.body.reminder,
  });
  task
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Created task successfully',
        createdTask: {
          name: req.body.name,
          dt: req.body.dt,
          reminder: req.body.reminder,
          _id: result._id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get('/:taskId', (req, res, next) => {
  const id = req.params.taskId;
  Task.findById(id)
    .select('name dt reminder _id')
    .exec()
    .then((doc) => {
      console.log('From database', doc);
      if (doc) {
        res.status(200).json({
          task: doc,
        });
      } else {
        res
          .status(404)
          .json({ message: 'No valid entry found for provided ID' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch('/:taskId', (req, res, next) => {
  const id = req.params.taskId; //passing identifer

  Task.updateMany({ _id: id }, { $set: req.body }) //using ID to update
    .exec()
    .then((result) => {
      res.status(200).json({
        result,
        message: 'Product updated',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete('/:taskId', (req, res, next) => {
  const id = req.params.taskId;
  Task.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'Product deleted',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
