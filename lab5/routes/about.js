const express = require("express");
const router = express.Router();

const about = {
    "name": "Kamil Zambrowski",
    "cwid": "10428741",
    "biography": "I was born on June 10th 1999. My hometown is East Rutherford NJ, and I went to elementary school at McKenzie school. When I was about 7 I started doing brazilian jiu jitsu and kickboxing. After elementary school, I went to middle school at Alfred Faust. \nAfter middle school, I went to high school at Bergen Tech in Teterboro NJ. My high school had majors, and I studied digital media. After graduating, I enrolled in and am currently still going to Stevens Institute of Technology. I am currently working on recieving my undergraduate degree in Compuer Science.",
    "favoriteShows": ["Dexter", "The Office", "Archer"],
    "hobbies": ["Martial Arts", "Listening to Podcasts", "Video Games","Watching Basketball"]
}

router.get("/", async (req, res) => {
    try {
        res.json(about);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;