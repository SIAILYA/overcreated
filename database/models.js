const mongoose = require("mongoose");

const {ProjectSchema, TopicSchema} = require("./Schemas");

const Project = mongoose.model("Project", ProjectSchema)
const Topic = mongoose.model("Topic", TopicSchema)

module.exports = { Project, Topic }
