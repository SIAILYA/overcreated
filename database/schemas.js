const {Schema} = require("mongoose");

const TopicSchema = new Schema({
    name: String,
    slug: {type: String, unique: true},
    color: [String]
})

const FileSchema = new Schema({
    name: String,
    uploadDate: Date,
    type: String,
    description: String,
    ext: String,
    path: String
})

const ProjectSchema = new Schema({
    name: {type: String, required: true},
    slug: {type: String, unique: true},
    shortDescription: String,
    developTime: Number,
    color: [String],
    demoLink: String,
    gitHubLink: String,
    behanceLink: String,
    description: String,
    techs: [String],
    photos: [String],
    visible: {type: Boolean, default: false},
    topics: [
        {type: Schema.Types.ObjectId, ref: "Topic"}
    ]
})

module.exports = { TopicSchema, FileSchema, ProjectSchema }
