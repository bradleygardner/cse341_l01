const visiterRoute = (req, res) => {
    res.send("Hello Visiter");
};

const bradleyRoute = (req, res) => {
    res.send("Hello Bradley");
};

const brotherBirchRoute = (req, res) => {
    res.send("Hello Brother Birch");
};

module.exports = {
    visiterRoute,
    bradleyRoute,
    brotherBirchRoute,
};