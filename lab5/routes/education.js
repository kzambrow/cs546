const express = require("express");
const router = express.Router();

const school1 = {
    "schoolName": "Stevens",
    "degree": "Computer Science undergrad",
    "favoriteClass": "CS 546 :)",
    "favoriteMemory": "Getting an A on a final I thought I failed"
}

const school2 = {
    "schoolName": "Bergen Tech",
    "degree": "High School Diploma",
    "favoriteClass": "Digital Media",
    "favoriteMemory": "Field trip to six flags"
}

const school3 = {
    "schoolName": "Alfred Faust",
    "degree": "Middle School Diploma",
    "favoriteClass": "Science",
    "favoriteMemory": "Field trip to Philadelphia"
}

const schools = [school1, school2, school3];

router.get('/', async (req, res) => {
    try {
        res.json(schools);
    } catch (e) {
        res.status(500).send();
    }
});


module.exports = router;