const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: "Workout type required"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter a name for the exercise"
        },
        duration: {
            type: Number,
            // required: "Enter a duration"
        },
        weight: {
            type: Number,
            // required: "Enter a weight"
        },
        reps: {
            type: Number,
            // required: "Enter reps"
        },
        sets: {
            type: Number,
            // required: "Enter sets"
        },
        distance: {
            type: Number,
            // required: "Enter a distance"
        },
    }]
},{
    toJSON: {
        virtuals: true
    }
}
)

WorkoutSchema.virtual("totalDuration").get(function () {
    let allDurations = 0;
    for(i=0; i< this.exercises.length; i++){
        allDurations += this.exercises[i].duration
    }

    return allDurations
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;