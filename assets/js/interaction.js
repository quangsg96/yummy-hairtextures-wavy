document.getElementById('hamburger').addEventListener('click', function() {
    var clickBtn = document.getElementById('navi-mobile');
    clickBtn.classList.toggle('slide-down');
});

// 2. DISPLAY MENU WHEN SCROLLING
// delay:
var duration = 750;
// actions when reach offset = 178:
$(document).ready(function() {
        $(function() {
            // $(window).scroll(function () {
            //     if ($(this).scrollTop() >= offset) {
            //         $('#navi-fixed').css('display', 'block');
            //         $('#navi-relative').css('display', 'none');
            //     }
            //     else{
            //         $('#navi-fixed').css('display', 'none');
            //         $('#navi-relative').slideDown();
            //         // mò cái dưới này, thêm classList, de9 dùng dc properties -> .class đó chứa [animation] property (đã có animation_name - vốn dc viết bên style.scss or style.css)
            //         // $('#navi-relative').classList ?
            //     }
            // });

            // Go to top
            // $('#navi-desktop-2').click(function () {
            //     $('body,html').animate({scrollTop: 0}, duration);
            // });
        });
});

var screenWidth = screen.width;
if (screenWidth >= 768) {
    window.addEventListener('scroll' , function() {
        var naFi = document.getElementById('navi-fixed');
        var naRe = document.getElementById('navi-relative');
        var scroll = this.scrollY;
        if (scroll >= 178) {
            naFi.style.display = 'block';
            naRe.style.cssText = 'height:0; overflow: hidden;'
        } else {
            naFi.style.display = 'none';
            naRe.style.cssText = 'height: 34px; overflow: visible;'
        }
    })
}
