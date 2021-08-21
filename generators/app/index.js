const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    this.log('Welcome to the BaseFront Generator!');
  }

  writing() {
    this.fs.copy(this.templatePath('**/*'), this.destinationPath('project'));
  }

  end() {
    this.log('Should be done now... ');
    this.log(' ');
  }
};
