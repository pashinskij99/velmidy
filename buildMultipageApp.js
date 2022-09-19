const { exec } = require('child_process');
const fs = require('fs');

exec(`npm run buildWindows`, () => {
    try {
        fs.rmSync('./build/models', { recursive: true });
    } catch (err) {
        console.error(err);
    }
});
