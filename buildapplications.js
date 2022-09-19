const { exec } = require('child_process');
const fs = require('fs');

const screensToBuild = [
    // 'screen1',
    'step0L',
    // 'step0C',
    // 'step1L',
    // 'step1C',
    // 'step2L',
    // 'step2C',
    // 'step3L',
    // 'step3C',
    // 'screen6',
    // 'screen7',
    // 'step4L',
    // 'step4C',
    // 'step5L',
    // 'step5C',
    // 'screen10',
    // 'step6L',
    // 'screen12',
    // 'step7L',
    // 'screen14',
    // 'screen15',
    // 'screen16',
    // 'screen17',
    // 'screen18',
    // 'screen19',
];

const renameLiver = (i) => {
    return new Promise((resolve) => {
        fs.readdir('./src/webgl/models/modelsGLB/', (err, files) => {
            files.forEach((file, index) => {
                if (index !== i)
                    fs.renameSync(
                        `./src/webgl/models/modelsGLB/${file}`,
                        `./tmp/models/modelsGLB/${file}`
                    );
            });
            resolve();
        });
    });
};

const renameLiverBack = () => {
    return new Promise((resolve) => {
        fs.readdir('./tmp/models/modelsGLB/', (err, files) => {
            files.forEach((file, index) => {
                fs.renameSync(
                    `./tmp/models/modelsGLB/${file}`,
                    `./src/webgl/models/modelsGLB/${file}`
                );
            });
            resolve();
        });
    });
};

const renameCube = (i) => {
    return new Promise((resolve) => {
        fs.readdir('./src/webgl/models/cubes/', (err, files) => {
            files.forEach((file, index) => {
                if (index !== i)
                    fs.renameSync(
                        `./src/webgl/models/cubes/${file}`,
                        `./tmp/models/cubes/${file}`
                    );
            });
            resolve();
        });
    });
};

const renameCubeBack = () => {
    return new Promise((resolve) => {
        fs.readdir('./tmp/models/cubes/', (err, files) => {
            files.forEach((file, index) => {
                fs.renameSync(
                    `./tmp/models/cubes/${file}`,
                    `./src/webgl/models/cubes/${file}`
                );
            });
            resolve();
        });
    });
};

const renameRoom = (i) => {
    return new Promise((resolve) => {
        fs.readdir('./src/webgl/models/room/', (err, files) => {
            files.forEach((file, index) => {
                if (i === 20)
                    fs.renameSync(
                        `./src/webgl/models/room/background.js`,
                        `./tmp/models/room/background.js`
                    );
            });
            resolve();
        });
    });
};

const renameRoomBack = () => {
    return new Promise((resolve) => {
        fs.readdir('./tmp/models/room/', (err, files) => {
            files.forEach((file, index) => {
                fs.renameSync(
                    `./tmp/models/room/background.js`,
                    `./src/webgl/models/room/background.js`
                );
            });
            resolve();
        });
    });
};

const execBuild = (arr, i) => {
    const item = arr[i];
    console.log(item);

    let modelIndex;
    if (item.includes('step') && item.includes('C')) {
        modelIndex = item.replace('step', '');
        modelIndex = +modelIndex.replace('C', '');
    }
    if (item.includes('step') && item.includes('L')) {
        modelIndex = item.replace('step', '');
        modelIndex = +modelIndex.replace('L', '');
        console.log(modelIndex);
    }
    if (
        item.includes('screen1') ||
        item.includes('screen6') ||
        item.includes('screen7') ||
        item.includes('screen10') ||
        item.includes('screen12') ||
        item.includes('screen14') ||
        item.includes('screen15') ||
        item.includes('screen16') ||
        item.includes('screen17')
    )
        modelIndex = 0;
    // else modelIndex = 20;
    console.log(modelIndex);

    renameCube(modelIndex).then(() => {
        renameLiver(modelIndex).then(() => {
            exec(
                `set REACT_APP_PAGE=${item}&& set BUILD_PATH=./dist/${item}&& set GENERATE_SOURCEMAP=false&& craco build`,
                () => {
                    console.log(`BUILD ${item} DONE`);
                    renameCubeBack().then(() => {
                        renameLiverBack().then(() => {
                            if (i !== arr.length - 1) execBuild(arr, i + 1);
                        });
                    });
                }
            );
        });
    });
};

execBuild(screensToBuild, 0);
