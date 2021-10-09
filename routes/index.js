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
const {
    Workout
} = require("../models")

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(data => res.json(data))
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(data => res.json(data))
})

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(data => res.json(data))
})

router.put("/api/workouts/:id", (req, res) => {
    console.log(req)
    Workout.update({
        '_id': 'ObjectId("615e3d082c4cb54af0d46336")'
    }, {
        $set: {
            'name': req.body.name
        }
    });
});

module.exports = router