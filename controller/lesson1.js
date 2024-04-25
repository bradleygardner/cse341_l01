const visiterRoute = (req, res) => {
    res.send("Hello Visiter");
};

const joshRoute = (req, res) => {
    res.send("Hello Josh");
};

const brotherBirchRoute = (req, res) => {
    res.send("Hello Brother Birch");
};

module.exports = {
    visiterRoute,
    bradleyRoute: joshRoute,
    brotherBirchRoute,
};