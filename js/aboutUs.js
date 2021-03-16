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

    // 咨询方式
    $(".news .content .dots li").click(function () {
        var CK = 0;
        var DIS = 0;
        CK = $(this).index()
        DIS = CK * 333
        $(".news .content .banner .wrap").animate({
            "marginLeft": -DIS
        }, 500)
        $(".dots li").eq(CK).addClass("active").siblings().removeClass("active")
    })

    // 地图
    new BaiduMap({
        id: "map-container",
        title: {
            text: "禧润通和（杭州）科技有限公司",
            className: "map-title"
        },
        content: {
            className: "map-content",
            text: ["地址：杭州市江干区江宁路553号东溪德必易园B3106", "电话：0571-8609 8167"]
        },
        point: {
            lng: "120.224181",
            lat: "30.297029"
        },
        level: 15,
        zoom: true,
        // type: ["地图", "卫星", "三维"],
        width: 320,
        height: 88,
        icon: {
            url: "../img/aboutUs_slices/icon.png",
            width: 36,
            height: 36
        }
    });

    //返回顶部特效
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $(".back-top").fadeIn(500)
            $(".sv").slideDown(500)
        } else {
            $(".back-top").fadeOut()
            $(".sv").slideUp()
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
