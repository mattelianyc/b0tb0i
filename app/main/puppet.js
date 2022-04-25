const { ipcMain } = require( 'electron' );
const path = require( 'path' );
const fs = require( 'fs-extra' );
const os = require( 'os' );
const { exec } = require('child_process');

exports.runBot = () => {
  console.log('bottyboi')
  exec('node ./app/main/bots/amazon.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}