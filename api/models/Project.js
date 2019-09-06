const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: { type: String, unique: true},
    tools: [String],
    description: String,
    github_link: String
});

module.exports = mongoose.model('Project', ProjectSchema);