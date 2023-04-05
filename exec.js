const cp = require('child_process');

cp.exec("open http://www.linkedin.com/learning", err => {
    console.log(err);
});