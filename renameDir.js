const fs = require('fs');

// fs.renameSync('./storage-files', './storage');

fs.readdirSync('./storage').forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
    console.log(`File ${fileName} removed`);
});

fs.rmdir('./storage', err => {
    if(err) {
        throw err;
    }

    console.log('./storage directory removed');
});
