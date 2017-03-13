function init() {
    // var pages = Array.from(document.querySelectorAll('.navbar>ul>li'));
    let pages = $('.navbar>ul>li');

    function hander() {
        pages.each(function (index, target) {
            $(target).removeClass('active');
        });

        $(this).addClass('active');
    }

    pages.on('click', hander);

    function hander2() {
        if ($(this).hasClass('active-light')) {
            $(this).removeClass('active-light');
            $(this).prev().removeClass('active');
        } else {
            $(this).addClass('active-light');
            $(this).prev().addClass('active');
        }

    }
    $('#header-search').on('focus blur', hander2);

    let buttons = $('.input-group-btn>button'),
        input = $('.input-group-btn+input');
    buttons[0].gitURL = 'https://github.com/Cuuube/html-css-js.git';
    buttons[1].gitURL = 'git@github.com:Cuuube/html-css-js.git';
    buttons.on('click', function (e) {
        if (!$(this).hasClass('active')) {
            buttons.removeClass('active');
            $(this).addClass('active');
            input.val(this.gitURL);
        }
    })
    $(buttons[0]).trigger('click');

}
init();