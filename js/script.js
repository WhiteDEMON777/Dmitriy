$(document).ready(function() {
    
    var start = new Date();

    if ($(".dateRide").length) {
        var datepicker = $(".dateRide").datepicker({
            dateFormat: 'd MM yyyy',
        });
        datepicker.data('datepicker').selectDate(new Date());
    }

    if ($(".birthDate").length) {
        $(".birthDate").datepicker({
            dateFormat: 'd MM yyyy',
        });
    }

    $('.header__tomorrow-text').on('click', function() {
        var date = new Date();
        date.setDate(date.getDate() + (+$(this).attr('day')));
        datepicker.data('datepicker').selectDate(date);
    });

    $('.modalbox').fancybox();
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
$('.select-js').selectize();
$('.title__outgo-input').selectize({
    selectSmartPositioning:false,
    selectVisibleOptions:3
});

var select = $('.select-js-main').selectize();
select.each(function() {
    var selectize = this.selectize;
    selectize.on('focus', function() {
        this.clear();
    });
    selectize.on('blur', function() {
        var opts = this.options;
        if (this.items.length === 0) {
            this.addItem(Object.keys(opts)[0]);
        }
    });
    selectize.on('item_add', function() {
        this.blur();
    });
});
$('.map__search').on("click",function(){
    var evt = new KeyboardEvent('keydown', {'keyCode':8, 'which':8});
    this.dispatchEvent(evt);
});
$('.tickets__Input-sortBy').styler({
    selectSmartPositioning:false,
});
$('.tickets__Input-show').styler({
    selectSmartPositioning:false,
    selectVisibleOptions:3
});
