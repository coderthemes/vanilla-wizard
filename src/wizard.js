class Wizard {
    constructor(element, options={}) {

        if (element instanceof HTMLElement) {
            this.wizard = element;
        } else {
            this.wizard = document.querySelector(element);
        }

        this.validate = options.validate ?? false;
        this.buttons = options.buttons?? false;
        this.progress = options.progress ?? false;

        this.initOptions();
        this.initEventListener();
    }


    //Init Options
    initOptions() {
        this.selectedIndex = 0;
        this.progressBar = this.progress ? this.wizard.querySelector('.tab-content .progress .progress-bar') : null;
        this.navItems = this.wizard.querySelectorAll('ul li.nav-item a');
        this.tabPans = this.wizard.querySelectorAll('.tab-content .tab-pane');
        this.initButtons();

        //Show first selected tab
        this.showTabSelectedTab();
    }

    //Init Buttons
    initButtons() {

        if (this.buttons) {
            this.prevBtn = this.wizard.querySelector('.tab-content .button-previous');
            this.nextBtn = this.wizard.querySelector('.tab-content .button-next');
            this.firstBtn = this.wizard.querySelector('.tab-content .button-first');
            this.lastBtn = this.wizard.querySelector('.tab-content .button-last');
        } else {
            this.prevBtn = this.wizard.querySelector('.tab-content .previous a');
            this.nextBtn = this.wizard.querySelector('.tab-content .next a');
            this.firstBtn = this.wizard.querySelector('.tab-content .first a');
            this.lastBtn = this.wizard.querySelector('.tab-content .last a');
        }
    }


    //Init all button event listener
    initEventListener() {
        const self = this;

        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (self.selectedIndex > 0 && self.validateForm()) {
                    self.selectedIndex--;
                    self.showTabSelectedTab();
                }
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (self.selectedIndex < self.navItems.length - 1 && self.validateForm()) {
                    self.selectedIndex++;
                    self.showTabSelectedTab();
                }
            });
        }

        if (this.firstBtn) {
            this.firstBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (self.selectedIndex !== 0 && self.validateForm()) {
                    self.selectedIndex = 0;
                    self.showTabSelectedTab();
                }
            });
        }

        if (this.lastBtn) {
            this.lastBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (self.selectedIndex !== self.navItems.length - 1 && self.validateForm()) {
                    self.selectedIndex = self.navItems.length - 1;
                    self.showTabSelectedTab();
                }
            });
        }

        this.navItems.forEach(function (element, index) {
            element.addEventListener('click', function () {
                self.selectedIndex = index;
                if (self.validateForm()) {
                    self.showTabSelectedTab();
                }
            });
        });

    }

    //Show tab which is selected
    showTabSelectedTab() {
        new bootstrap.Tab(this.navItems[this.selectedIndex]).show();
        if (this.progressBar) {
            this.progressBar.style.width = ((this.selectedIndex + 1) / this.navItems.length * 100).toString() + '%';
        }
        this.changeBtnStyle();
    }

    //Change button style enable to disable and vice-versa
    changeBtnStyle() {

        this.lastBtn.classList.remove('disabled');
        this.firstBtn.classList.remove('disabled');
        this.nextBtn.classList.remove('disabled');
        this.prevBtn.classList.remove('disabled');
        if (this.selectedIndex === 0) {
            this.prevBtn.classList.add('disabled');
            this.firstBtn.classList.add('disabled');
        } else if (this.selectedIndex === this.navItems.length - 1) {
            this.nextBtn.classList.add('disabled');
            this.lastBtn.classList.add('disabled');
        }

    }

    //If form validate is true then validate a form
    validateForm() {
        if (this.validate) {
            const form = this.tabPans[this.selectedIndex].querySelector('form');
            if (form) {
                form.classList.add('was-validated');
                return form.checkValidity();
            }
        }
        return true;
    }

}