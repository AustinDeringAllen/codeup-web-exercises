(() => {
    /* Part 1 */
    const getLastCommit = (username) => {
        const url = `https://api.github.com/users/${username}/events/public`;
        fetch(url).then((data) => data.json()).then(data => {
            console.log(data[0].created_at);
        });
    }
    getLastCommit("austinderingallen");

    /* Part 2 */
    const wait = (num) => {
        const promise = new Promise((resolve, reject) => {
            if(typeof num === "number") {
                setTimeout(() => {
                   resolve(`${num} second${num != 1 ? "s" : ""} has passed`);
                }, num * 1000);
            } else {
                reject("Uh oh");
            }
        });
        return promise;
    }

    /* Event Listeners using jQuery Slim */

    $('#user-submit').click((e) => {
        e.preventDefault();
        getLastCommit($('#user-input').val());
    });

    $('#seconds-submit').click((e) => {
        e.preventDefault();
        const promise = wait(parseFloat($('#seconds-input').val()));
        promise.then(data => console.log(data));
    });
})();