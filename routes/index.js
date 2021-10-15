const router = require("express").Router();
const db = require("../models")

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => res.json(data))
})

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(data => res.json(data))
})

router.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then(data => res.json(data))
})

// router.put("/api/workouts/:id", (req, res) => {
//     console.log(req.body);
//     console.log(req.params);
//     db.Workout.findByIdAndUpdate({req.params.id}, { $push: req.body }, { new: true });
// });

router.put("/api/workouts/:id", ({body, params}, res) => {
    // console.log(body, params)
    const workoutId = params.id;
    let savedExercises = [];

    // gets all the currently saved exercises in the current workout
    db.Workout.find({_id: workoutId})
        .then(dbWorkout => {
            // console.log(dbWorkout)
            savedExercises = dbWorkout[0].exercises;
            res.json(dbWorkout[0].exercises);
            let allExercises = [...savedExercises, body]
            // console.log(allExercises)
            updateWorkout(allExercises)
        })
        .catch(err => {
            res.json(err);
        });

    function updateWorkout(exercises){
        db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
        if(err){
            console.log(err)
        }

        })
    }
        
})

module.exports = router