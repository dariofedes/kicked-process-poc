module.exports = function registerUser({ body: { user } }, res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            delete user.password

            resolve(user)
        }, 1000);
    })
}