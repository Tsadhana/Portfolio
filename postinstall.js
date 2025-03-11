const os = require('os');
const exec = require('child_process').exec;

if (os.platform() === 'win32') {
    exec('npm install lightningcss-win32-x64-msvc', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
    });
}
