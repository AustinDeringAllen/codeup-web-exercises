const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let languages = users.filter(user => user.languages >= 3);
console.log(`Three or more languages: ${languages}`);

let emails = users.map(user => user.email);
console.log(`These are each users email address ${emails}`);

let experience = users.reduce((sum, user) => sum + user.yearsOfExperience, 0);
console.log(`The average years of experience is: ${experience / users.length}`);

let longestEmail = users.reduce((longest, current) => {
    if(current.email.length > longest.email.length) {
        return current;
    } else {
        return longest;
    }
}, users[0]);
console.log(`The longest email is ${longestEmail.email} characters in length`);

let nameString = users.reduce((string, current) => string + " " + current.name, "");
console.log(nameString);