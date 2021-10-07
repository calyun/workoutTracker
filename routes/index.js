// const { application } = require("express");
// const Workout = require("../models/workout");

// application.post("/api/workouts", ({ body }, res) => {
//     Workout.create(body).then(dbWorkout => {
//         res.json(dbWorkout);
//     }).catch(err => {
//         res.json(err);
//     });
// });
const router = require("express").Router();
const { Workout } = require("../models")

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(data => res.json(data))
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(data => res.json(data))
})

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(data => res.json(data))
})

module.exports = router