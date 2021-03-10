$(document).ready(function() {
    $('.header__burger').on('click', function(){
        $('.header').toggleClass('header--open')
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header--open").length) {
            $('.header').removeClass('header--open');
        };
        e.stopPropagation();
    });
    $('.header__navigation-link').on('click', function(){
        $('.header').removeClass('header--open');
    });

    if ($(".dateRide").length) {
        var start = new Date();
        var mdate = new Date(start.getFullYear(), start.getMonth() + 1, 0);
        mdate.setDate(start.getDate() + mdate.getDate());
        var datepicker = $(".dateRide").datepicker({
            dateFormat: 'd.mm.yyyy',
            autoClose:true,
            startDate: start,
            minDate: start,
            maxDate: mdate,
        });
        datepicker.data('datepicker').selectDate(new Date());
    }

    if ($(".birthDate").length) {
        $(".birthDate").datepicker({
            autoClose:true,
            dateFormat: 'd.mm.yyyy',
        });
    }

    $('.header__tomorrow-text').on('click', function() {
        var date = new Date();
        date.setDate(date.getDate() + (+$(this).attr('day')));
        datepicker.data('datepicker').selectDate(date);
    });

    $('.modalbox').fancybox({
        afterLoad: function() {
            $('.modal__select').styler({
                selectSmartPositioning:true,
                selectVisibleOptions:3
            });
        }
    });

});
$('.modalButton-js').click(function(){
    $.fancybox.close();
    });
$(".scheme__tile").on("click", function() {
    this.classList.toggle("scheme__tile--selected");
});
$('.menu__burger').on('click', function() {
    $('.menu').toggleClass('menu--open');
    $('body').toggleClass('overflow');
    $('html').toggleClass('overflow');
})
$('.map__point').on("click", function(){
    $('.map__pointContact', $(this)).slideToggle();
    $(this).toggleClass("map__point--active");
});
$('#select-search').selectize({
    placeholder:"Поиск по городу",
    hideSelected: true,
});
var select = $('.title__outgo-input').selectize({
    selectSmartPositioning:false,
    selectVisibleOptions:5
});
select.each(function() {
    var selectize = this.selectize;
    selectize.on('focus', function() {
        this.clear();
    });
    selectize.on('blur', function() {
        if (this.items.length === 0) {
            this.addItem(this.lastValidValue);
        }
    });
    selectize.on('item_add', function() {
        this.blur();
    });
});

select =$('#select-search').selectize({
    placeholder:"Поиск по городу",
    hideSelected: true,
    selectSmartPositioning:false,
    selectVisibleOptions:5
});
select.each(function() {
    var selectize = this.selectize;
    selectize.on('focus', function() {
        this.clear();
    });
    selectize.on('blur', function() {
        if (this.items.length === 0) {
            this.addItem(this.lastValidValue);
        }
    });
    selectize.on('item_add', function() {
        this.blur();
    });
});
select = $('.select-js-main').selectize({
    selectSmartPositioning:false,
    selectVisibleOptions:5
});

$('.header__where-img').on('click', function() {
    var reverseLeft = select[0].selectize,
        reverseRight = select[1].selectize,
        tmp = reverseLeft.lastValidValue;
        reverseLeft.clear();
        reverseLeft.addItem(reverseRight.lastValidValue);
        reverseRight.clear();
        reverseRight.addItem(tmp);

})
select.each(function() {
    var selectize = this.selectize;
    selectize.on('focus', function() {
    
        this.clear();
    });
    selectize.on('blur', function() {
        if (this.items.length === 0) {
            this.addItem(this.lastValidValue);
        }
    });
    selectize.on('item_add', function() {
        this.blur();
    });
});

$('.tickets__select').styler({
    selectSmartPositioning:false,
});
$('.input--num').mask('9   9   9   9');
$('.inputPhone-js').mask('+7(999)99-99-99');
