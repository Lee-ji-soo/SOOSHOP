function Window() {

    this.scrollEvent = () => {

        const navibarScroll = () => {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 10) {
                $('.navbar-brand').addClass('smallFt');
                $('.navbar').addClass('nav-link-blk');
                $('.navbar').addClass('bg-light');
                $('.navbar').addClass('navbar-light');
            } else if (scrollTop < 10) {
                $('.navbar-brand').removeClass('smallFt')
                $('.navbar').removeClass('bg-light');
                $('.navbar').removeClass('navbar-light');
            }
        }
        window.addEventListener('scroll', navibarScroll)
    }

    this.scrollEvent();
}

export default Window
