$(function () {

    //header导航栏固定
    $(window).scroll(function () {
        var headScrollTop = $(document).scrollTop()
        if (headScrollTop > 101) {
            $('.header').css({
                "position": 'fixed',
                "top": 0,
                'z-index': 20000,
                'box-shadow': '0 3px 5px rgba(0, 0, 0, 0.1)',
            })
            $('.project').css('margin-top', '101px')
        } else {
            $('.header').css({
                "position": "relative",
            })
            $('.project').css('margin-top', 0)
        }
    })

    // 主页头部鼠标悬浮效果
    $(".header .nav .nav-box ul li").mouseover(function () {
        $(this).find(".skip").addClass("active").end().siblings().find(".skip").removeClass("active")
        $(this).find(".small").stop(true, true).slideDown(100)
    })
    $(".header .nav .nav-box ul li").mouseleave(function () {
        $(this).find(".small").stop(true, true).slideUp(200)
    })

    $(".header .nav .nav-box ul .direction").mouseover(function(){
        $(this).find('.iconfont').removeClass("icon-xia1")
        $(this).find('.iconfont').addClass("icon-shang1")
    })
    $(".header .nav .nav-box ul .direction").mouseleave(function(){
        $(this).find('.iconfont').removeClass("icon-shang1")
        $(this).find('.iconfont').addClass("icon-xia1")
    })
    
    $(".small li").mouseenter(function () {
        $(this).css("background", "#205CB7")
    })
    $(".small li").mouseleave(function () {
        $(this).css("background", "#174FA4")
    })

    //联系我们会话框
    $('.contact-us .us').click(function () {
        $('.popup').css('display', 'block')
    })
    $('.contact-icon').click(function () {
        $('.popup').css('display', 'none')
    })

    //返回顶部特效
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $(".back-top").css("display", "block")
        } else {
            $(".back-top").css("display", "none")
        }
    })

    //点击返回顶部
    $(".back-top").mouseenter(function () {
        $(".back-top .huojian").hide()
        $(".back-top .font").show()
    })
    $(".back-top").mouseleave(function () {
        $(".back-top .huojian").show()
        $(".back-top .font").hide()
    })
    $(".back-top").click(function () {
        $("body,html").animate({
            "scrollTop": 0
        }, 500)
    })
})
