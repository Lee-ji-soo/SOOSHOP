function Navigation() {
    const $hamburger = document.querySelector('.hamburger-open');
    const $navLi = document.querySelectorAll('.nav-li');
    const $navUl = document.querySelector('.nav-ul');

    this.isOpen = false;

    this.evtBinding = () => {

        const handleHamburger = () => {
            if (this.isOpen) {
                $hamburger.classList.remove('close');
                $navUl.classList.remove('show');
                $navLi.forEach(li =>
                    li.classList.remove('show'))
            } else {
                $hamburger.classList.add('close');
                $navUl.classList.add('show');
                $navLi.forEach(li =>
                    li.classList.add('show'))
            }

            this.isOpen = !this.isOpen;
        }

        $hamburger.addEventListener('click', handleHamburger)
    }

    this.evtBinding();
}

export default Navigation;
