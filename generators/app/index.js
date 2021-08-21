const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  welcome() {
    this.log('Welcome to the BaseFront Generator!');
  }

  writing() {
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('package-lock.json'),
      this.destinationPath('package-lock.json')
    );
    this.fs.copy(this.templatePath('app'), this.destinationPath('app'));
  }

  end() {
    this.log('Should be done now... ');
    this.log(' ');
  }
};
