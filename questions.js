let mainQuestions = [
    {
        type: "list",
        name: "type",
        message: "What type of pet would you like to have?",
        choices: ["Unicorn", "Octopus", "Phoenix"],
    },
    {
        type: "input",
        name: "name",
        message: "What is your pets name?",
    },
    // {
    //     type: "number",
    //     name: "age",
    //     message: "Tell me the year when your pet was born?",
    // },
];

let gameQuestions = [
    {
        type: "list",
        name: "action",
        message: "What would you like your pet to do?",
        choices: ["Water", "Sleep", "Feed", "Ride (Unicorn only)", "Shower (Unicorn only)", "Play (Unicorn only)", "Play (Octopus only)", "Swim (Octopus only)", "Hunting (Octopus only)", "Play (Phoenix only)", "Fly (Phoenix only)", "Sing (Phoenix only)"]
    }
];

// let gameQuestionsUni = [
//     {
//         type: "list",
//         name: "action",
//         message: "What would you like your pet to do?",
//         choices: ["Water", "Sleep", "Feed", "Ride", "Shower", "Play"]
//     }
// ];

module.exports = {
    mainQuestions,
    gameQuestions
    // gameQuestionsUni
};