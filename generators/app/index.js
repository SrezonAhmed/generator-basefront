const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    this.log('Welcome to the BaseFront Generator!');
  }

  writing() {
    this.fs.copy(
      this.templatePath('html/index.html'), this.destinationPath('html/index.html')
    );
    this.fs.copy(
      this.templatePath('html/navigation.html'), this.destinationPath('html/navigation.html')
    );
    this.fs.copy(
      this.templatePath('html/footer.html'), this.destinationPath('html/footer.html')
    );
    this.fs.copy(
      this.templatePath('css/style.css'), this.destinationPath('css/style.css')
    );
    this.fs.copy(
      this.templatePath('scss/style.scss'), this.destinationPath('scss/style.scss')
    );
    this.fs.copy(
      this.templatePath('scss/._core.scss'), this.destinationPath('scss/._core.scss')
    );
    this.fs.copy(
      this.templatePath('scss/._navbar.scss'), this.destinationPath('scss/._navbar.scss')
    );
    this.fs.copy(
      this.templatePath('scss/._footer.scss'), this.destinationPath('scss/._footer.scss')
    );
    this.fs.copy(
      this.templatePath('scss/._colours.scss'), this.destinationPath('scss/._colours.scss')
    );
    this.fs.copy(
      this.templatePath('scss/._buttons.scss'), this.destinationPath('scss/._buttons.scss')
    );
    this.fs.copy(
      this.templatePath('scss/._media.scss'), this.destinationPath('scss/._media.scss')
    );
    this.fs.copy(
      this.templatePath('js/script.js'), this.destinationPath('js/script.js')
    );
    this.fs.copy(
      this.templatePath('js/template.js'), this.destinationPath('js/template.js')
    );
    this.fs.copy(
      this.templatePath('_gitignore'), this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('package.json'), this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('package-lock.json'), this.destinationPath('package-lock.json')
    );
    this.fs.copy(this.templatePath('app'), this.destinationPath('app'));
  }

  end() {
    this.log('Should be done now... ');
    this.log(' ');
  }
};
