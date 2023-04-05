const fs = require('fs');

/**
 * Read text file
 */

// const text = fs.readFileSync('./assets/Readme.md', 'UTF-8');

// console.log(text);

fs.readFile('./assets/Readme.md', 'utf-8', (err, text) => {
    if(err){
        throw err;
    }
    console.log(text);
})

/**
 * Read binary file
 */

fs.readFile('./assets/Alex.jpg', (err, img) => {
    if(err){
        console.log(`An error has occured: ${err.message}`);
    }

    console.log(img);
})
