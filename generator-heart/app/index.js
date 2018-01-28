// initializing - 您的初始化方法（检查当前项目状态，获取配置等）
// prompting- 在哪里提示用户选择（你打电话的地方this.prompt()）
// configuring- 保存配置并配置项目（创建.editorconfig文件和其他元数据文件）
// default - 如果方法名称与优先级不匹配，将被推送到此组。
// writing - 编写生成器特定文件（路由，控制器等）的位置
// conflicts - 处理冲突（内部使用）
// install - 运行安装（npm，bower）
// end- 称为最后，清理，再见再见等
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const _ = require('lodash');
const mkdirp = require('mkdirp');

const today = new Date();
const nowTitle = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`;
const nowDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
const nowTime = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.title = nowDate;
    this.tags = "";
    this.categories = "";
    this.date = nowTime;
  }

  info() {
    this.log(yosay(
      'Welcome to the ' + chalk.red('heart blog')
    ));
  }
  prompting() {
    
    return this.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Please input page title:',
        default: this.title,
      },
      {
        type: 'list',
        name: 'tags',
        message: 'Please choose tags',
        choices: ['Daily', 'Experience'],
        default: ['Daily']
      },
      {
        type: 'list',
        name: 'categories',
        message: 'Please choose categories',
        choices: ['Progress'],
        default: ['Progress']
      }
    ]).then(answer => {
      this.title = answer.title;
      this.tags = answer.tags;
      this.categories = answer.categories;
    });
  };

  writing() {
    this.fs.copyTpl(
      this.templatePath('new.md'),
      this.destinationPath(`source/_posts/${nowTitle}.md`),
      { title: this.title,
        tags: this.tags,
        categories: this.categories,
        date: this.date }
    );
    // fscopy('containers/Home.js', path);
  };
  end() {
    this.log(yosay(
      'Create Module Success'
    ));
  }
};
