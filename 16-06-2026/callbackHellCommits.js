let users = [
    {
        userId: "anshika@gmail.com",
        userName: "Anshika"
    },
    {
        userId: "akanshi@gmail.com",
        userName: "Akanshi"
    }
];
function getUser(userId, callback) {
    setTimeout(() => {
        let user = users.find(
            (user) => user.userId === userId
        );
        console.log("User Found:");
        console.log(user);
        callback(user);
    }, 3000);
}
function getRepo(userName, callback) {
    setTimeout(() => {
        let repos = ["R1", "R2", "R3"];
        callback(repos);
    }, 3000);
}
function getCommits(repo, callback) {
    setTimeout(() => {
        let commits = ["C1", "C2", "C3"];
        callback(commits);
    }, 3000);
}
getUser("anshika@gmail.com", (user) => {
    getRepo(user.userName, (repos) => {
        console.log(repos);
        getCommits(repos[0], (commits) => {
            console.log(commits);
        });
    });
});