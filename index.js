#!/usr/bin/env node
const program = require('commander');
const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');

program.version('1.0.0', '-v, --version')
  .command('init <name>')
  .action((name) => {
    const spinner = ora(`正在克隆项目至 ./${name} `);
    spinner.start();
    download('direct:https://github.com/WULIbinbin/react-bx-admin.git', name, { clone: true }, (err) => {
      if(err){
        spinner.fail();
        console.log(symbols.error,chalk.red('克隆失败'))
        console.log(symbols.error,err)
      }else{
        spinner.succeed();
        console.log(symbols.success,chalk.green('克隆成功'))
      }
    })
  });
program.parse(process.argv);