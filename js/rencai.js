$(function () {

    //header导航栏固定
    $(window).scroll(function () {
        var headScrollTop = $(document).scrollTop()
        if (headScrollTop > 81) {
            $('.header').css({
                "position": 'fixed',
                "top": 0,
                'z-index': 20000,
                'box-shadow': '0 3px 5px rgba(0, 0, 0, 0.1)',
            })
            $('.project').css('margin-top', '81px')
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

    $(".header .nav .nav-box ul .direction").mouseover(function () {
        $(this).find('.iconfont').removeClass("icon-xia1")
        $(this).find('.iconfont').addClass("icon-shang1")
    })
    $(".header .nav .nav-box ul .direction").mouseleave(function () {
        $(this).find('.iconfont').removeClass("icon-shang1")
        $(this).find('.iconfont').addClass("icon-xia1")
    })

    $('.small li').mouseover(function () {
        $(this).find('.img-first').attr('src', "../img/product_slices/cz-xz@2x.png");
        $(this).find('.img-end').attr('src', "../img/product_slices/qy-xz@2x.png");
        $(this).find('a').css('color', '#D2A26B')
    })
    $('.small li').mouseleave(function () {
        $(this).find('.img-first').attr('src', "../img/product_slices/cz-wxz@2x.png");
        $(this).find('.img-end').attr('src', "../img/product_slices/qy-wxz@2x.png");
        $(this).find('a').css('color', '#666')
    })
    // 职位列表下拉框展示
    var directionNum = 0
    $('.position .position-content .list p').click(function () {
        directionNum += 1
        if (directionNum == 1) {
            $(this).next().removeClass('icon-xia')
            $(this).next().addClass('icon-shang')
        } else if (directionNum == 2) {
            $(this).next().removeClass('icon-shang')
            $(this).next().addClass('icon-xia')
            directionNum = 0
        }
    })

    var i = 0;
    $('.position .position-content .list').click(function () {
        i += 1
        if (i == 1) {
            $('.position .position-content .list .select-list').css("display", "block")
        } else if (i == 2) {
            $('.position .position-content .list .select-list').css("display", "none")
            i = 0
        }
    })


    // 开放职位指针移入移出显隐/伸缩特效
    $('.open-position .content .hot .ul-li').mouseenter(function () {
        $(this).find('.apply').stop(true).show(500)
        $(this).find('.msg').stop(true).slideDown(500)
    })

    $('.open-position .content .hot .ul-li').mouseleave(function () {
        $(this).find('.apply').stop(true).hide(300)
        $(this).find('.msg').stop(true).slideUp()
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

