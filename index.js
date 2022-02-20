const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt(
    [
        {
            type: "input",
            name: "title",
            message: "What's the project title?",
            validate: (value)=>{ if(value){return true} else {return "i need a value to continue"}}
        },
        {
            type: "input",
            name: "description",
            message: "Description of the project",
            validate: (value)=>{ if(value){return true} else {return "i need a value to continue"}}
        },
        {
            type: "input",
            name: "installation",
            message: "How to install",
            validate: (value)=>{ if(value){return true} else {return "i need a value to continue"}}
        },
        {
            type: "input",
            name: "usage",
            message: "How is this project used",
            validate: (value)=>{ if(value){return true} else {return "i need a value to continue"}}
        },
        {
            type: "input",
            name: "contributions",
            message: "How to contribute",
            validate: (value)=>{ if(value){return true} else {return "i need a value to continue"}}
        },
        {
            type: "input",
            name: "test",
            message: "How do you test this project",
            validate: (value)=>{ if(value){return true} else {return "i need a value to continue"}}
        },
        {
            type: "checkbox",
            name: "licensing",
            message: "Choose a license for the project",
            choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
            ],
            validate: (value)=>{ if(value){return true} else {return "i need a value to continue"}}
        },
        {
            type: "input",
            name: "github",
            message: "Enter  your GitHub Username",
            validate: (value)=>{ if(value){return true} else {return "i need a value to continue"}}
        },
        {
            type: "input",
            name: "email",
            message: "E-Mail",
            validate: (value)=>{ if(value){return true} else {return "i need a value to continue"}}
        }
    ]

).then(({
    title,
    description,
    installation,
    usage,
    contributions,
    test,
    licensing,
    github,
    email
})=>{
    const template = `# ${title}



- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Test](#test)
- [Additional Info](#additional-info)

## Description:
${description}
## Installation:
${installation}
## Usage:
${usage}
## License:
${licensing}
## Contribution:
${contributions}
## Test:
${test}


## Additional Info:
- Github: ${github}
- Email: ${email}`;
writeToFile(title,template);
}
);

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(" ").join("")}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("README has been generated!");
    })
}
