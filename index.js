const jwt = require('jsonwebtoken');
const express = require("express")
const mongoose = require("mongoose");
const history = require('connect-history-api-fallback')
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fs = require("fs/promises")
const app = express();
const cors = require('cors')
const crypto = require("crypto")

const adminName = "siailyaadmin"
const adminHash = "MigTlxdJgcxsMgddlmlTuuR5rPFMaeqytAfD5vYAXTA="

mongoose.connect('mongodb://ovc:overcreatedwebapp2021@194.67.111.141:27017/overcreated?authSource=overcreated&readPreference=primary&directConnection=true&ssl=false', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

nunjucks.configure('views', {
    autoescape: true, express: app
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors())

app.use(require('express-session')({secret: 'overcreatedsiailyakey5000', resave: false, saveUninitialized: false}));

const checkLogin = (req, res, next) => {
    if (req.session.loggedIn) {
        next()
    } else {
        res.redirect("/admin/login")
    }
}

const multer = require('multer')
const {Project, Topic} = require("./database/models");
const upload = multer({dest: 'uploads/'})

const TelegramBot = require('node-telegram-bot-api');
const token = '5082176059:AAGdSKkszYZQ-NuTgGY19EtzQS-yjCtgzVQ';
const bot = new TelegramBot(token, {polling: true});

app.get("/admin/login", ((req, res) => {
    res.render("login")
}))

app.post('/admin/login', (req, res) => {
    const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');

    if (hash === adminHash && req.body.login === adminName) {
        req.session.loggedIn = true
        res.redirect("/admin")
    } else {
        res.redirect("/admin/login")
    }
});

app.get("/admin", checkLogin, (req, res) => {
    res.render("index")
})

app.get("/admin/topics", checkLogin, async (req, res) => {
    const allTopics = (await Topic.find())

    res.render("topics", {allTopics})
})

app.get("/admin/add_topic", checkLogin, ((req, res) => {
    res.render("add_topic")
}))

app.post("/admin/add_topic", checkLogin, async (req, res) => {
    const topicObject = req.body
    topicObject.color = [topicObject.color1, topicObject.color2]
    await Topic.create(topicObject)

    res.redirect("/admin/topics")
})

app.get("/admin/edit_topic/:id", checkLogin, (async (req, res) => {
    const editTopic = await Topic.findById(req.params.id)

    res.render("edit_topic", {editTopic})
}))

app.post("/admin/edit_topic/:id", checkLogin, (async (req, res) => {
    const editedTopic = req.body
    editedTopic.color = [editedTopic.color1, editedTopic.color2]

    editedTopic.defaultSelected = Object.keys(editedTopic).indexOf("defaultSelected") !== -1
    editedTopic.onList = Object.keys(editedTopic).indexOf("onList") !== -1

    await Topic.findByIdAndUpdate(req.params.id, editedTopic)

    res.redirect("/admin/topics")
}))

app.get("/admin/delete_topic/:id", checkLogin, (async (req, res) => {
    await Topic.findByIdAndDelete(req.params.id)
    res.redirect("/admin/topics")
}))

app.get("/admin/projects", checkLogin, async (req, res) => {
    const allProjects = await Project.find()

    res.render("projects", {allProjects})
})

app.get("/admin/add_project", checkLogin, async (req, res) => {
    const allTopics = (await Topic.find())

    res.render("add_project", {allTopics})
})

app.post("/admin/add_project", checkLogin, async (req, res) => {
    const projectObject = req.body

    projectObject.techs = projectObject.techs.split(",").map(tech => {
        return tech.trim()
    }).filter(tech => tech.length > 1)

    projectObject.topics = Object.keys(projectObject).map(key => {
        return key.substr(0, 5) === "topic" ? projectObject[key] : ""
    }).filter(topic => topic.length > 1)

    projectObject.color = [projectObject.color1, projectObject.color2]

    await Project.create(projectObject)

    res.redirect("/admin/projects")
})

app.get("/admin/edit_project/:id", checkLogin, async (req, res) => {
    const project = (await Project.findById(req.params.id))
    const allTopics = (await Topic.find())

    res.render("edit_project", {project, allTopics})
})

app.post("/admin/edit_project/:id", checkLogin, async (req, res) => {
    const editedProject = req.body

    editedProject.techs = editedProject.techs.split(",").map(tech => {
        return tech.trim()
    }).filter(tech => tech.length > 1)

    editedProject.topics = Object.keys(editedProject).map(key => {
        return key.substr(0, 5) === "topic" ? editedProject[key] : ""
    }).filter(topic => topic.length > 1)

    editedProject.color = [editedProject.color1, editedProject.color2]


    await Project.findByIdAndUpdate(req.params.id, editedProject)

    res.redirect("/admin/projects")
})

app.get("/admin/delete_project/:id", checkLogin, (async (req, res) => {
    await Project.findByIdAndDelete(req.params.id)
    res.redirect("/admin/projects")
}))

app.get("/api/v1/status", ((req, res) => {
    res.send("Working")
}))

app.post("/api/upload_photo", upload.array("photo", 10), async (req, res) => {
    for (const file of req.files) {
        const ext = file.originalname.split(".")[file.originalname.split(".").length - 1]
        const onlyName = file.originalname.split(".").splice(file.originalname.split(".").length - 2, 1).join("")
        const uploadDate = new Date().getTime()
        const saveName = onlyName + "_" + uploadDate + "." + ext

        await fs.copyFile(file.path, path.join("uploads", saveName))
        await fs.unlink(file.path)
    }

    res.send("Ok")
})

app.get("/api/v1/topics/get", (async (req, res) => {
    const topics = await Topic.find({onList: true}, {__v: 0})
    res.send(topics)
}))

app.post("/api/v1/projects/get", (async (req, res) => {
    const topicIDs = (await Topic.find({slug: {$in: req.body.topics}}, {_id: 1})).map(topic => topic._id)
    // FIXME: Архетектура говно, надо посылать id топиков
    console.log(topicIDs)
    const projects = await Project.find({
        visible: true, topics: {
            $elemMatch: {$in: topicIDs}
        }
    }, {
        name: 1, slug: 1, shortDescription: 1, color: 1, demoLink: 1, developTime: 1, techs: 1
    }).populate("topics", {color: 1, name: 1, _id: 0})
    res.send(projects)
}))

app.post("/api/v1/send_request", ((req, res) => {
    bot.sendMessage(367861919, JSON.stringify(req.body));
}))

app.get("/404", ((req, res) => {
    res.status(404)
    res.sendFile(__dirname + "/dist" + "/index.html")
}))

app.use(history({
    disableDotRule: false, verbose: true, htmlAcceptHeaders: ['text/html'], rewrites: [{from: "/404", to: "/404"}]
}))

app.use(express.static("dist"))
app.use(express.static('uploads'))
app.use(express.static('static'))


app.listen(5088)
