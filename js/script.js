function pasCount(val, target, adult = false, children = false) {
    let sum = 0;
    let pas = $('.modal__countInp');
    pas.each(function() {
        sum += +this.value;
    });

    let amount = +target.val() + val;
    if (sum + val <= 4 && sum + val >= 0 && amount >= adult ? 1 : 0) {
        target.val(amount);
        let cont = $('.modal__children');
        if (children) {
            let line = $('.modal__line', cont).eq(-1);
            if (amount > 0) {
                cont.slideDown();
                if (val > 0) {
                    if (amount > 1) {
                        line.clone().appendTo(cont);
                        line = $('.modal__line', cont);
                        let n = line.length;
                        line = line.eq(-1);
                        $('label.modal__checkbox', line).attr('for', 'seat' + n);
                        $('input[type="checkbox"]', line).attr('id', 'seat' + n);
                        line.css('display', 'none');
                        line.slideDown();
                    }
                } else {
                    line.slideUp();
                    setTimeout(function() {
                        line.remove();
                    }, 400);
                }
            } else {
                cont.slideUp();
            }
        }
    }
}

function addChildrenSelect(remove = false) {}

$(document).ready(function() {
    //modal__pasengers
    $('.modal__countMinus').each(function(index, item) {
        $(item).on('click', function(e) {
            let cont = $(e.target).parent();
            let target = $('.modal__countInp', cont);
            if (target.attr('adult')) {
                pasCount(-1, target, true);
            } else if (target.attr('children')) {
                pasCount(-1, target, false, true);
            } else {
                pasCount(-1, target);
            }
        });
    });

    $('.modal__countPlus').each(function(index, item) {
        $(item).on('click', function(e) {
            let cont = $(e.target).parent();
            let target = $('.modal__countInp', cont);
            if (target.attr('children')) {
                pasCount(1, target, false, true);
            } else {
                pasCount(1, target);
            }
        });
    });

    var dbDate = "20 мая 2021";
    var date2 = new Date(dbDate);

    $("#dateRide").datepicker({
        dateFormat: 'dd MM yyyy'
    }).datepicker('setDate', date2)
});
$(".scheme__tile").on("click", function() {
    this.classList.toggle("scheme__tile--selected");
});
$('.menu__burger').on('click', function() {
    $('.menu').toggleClass('menu--open');
    $('body').toggleClass('overflow');
    $('html').toggleClass('overflow');
})