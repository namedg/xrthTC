$(function () {

    // 图片懒加载
    // $("img.lazy").lazyload({
    //     effect:"fadeIn",	//载入效果使用渐变
    // 		threshold:100,		//离页面还有100px时开始加载
    // 		// container:'$("#container")'	//对指定容器内的图片实现效果,lazyload默认对整个浏览器拉动滚动条的时候生效,建议不要指定容器,容易导致lazyload无效
    // });

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

    /*主页全屏无缝轮播效果*/
    var index = 0;
    var timer;
    var flag = true

    $(".wrap .right").click(function () {
        if (flag) {

            flag = false
            index++;

            if (index == 2) {
                $(".banner").animate({
                    "left": (-index * 100) + '%'
                }, 500, function () {
                    $(".banner").css("left", 0);
                    flag = true
                })

                index = 0
            } else {
                $(".banner").animate({
                    "left": (-index * 100) + '%'
                }, 500, function () {
                    flag = true

                })
            }
        }
    })

    $(".wrap .left").click(function () {
        if (flag) {

            flag = false
            index--;

            if (index == -1) {
                $(".banner").css("left", (-2 * 100) + '%');
                index = 1
            }
            $(".banner").animate({
                "left": (-index * 100) + '%'
            }, 500, function () {
                flag = true
            })
        }
    })

    timer = setInterval(function () {
        $(".wrap .right").click()
    }, 3000)

    $(".wrap").hover(function () {
        $(".wrap .btn").fadeIn()
        clearInterval(timer)
    }, function () {
        $(".wrap .btn").fadeOut()
        timer = setInterval(function () {
            $(".wrap .right").click()
        }, 3000)
    })

    // 动态数据展示 窗口显示才加载
    var wrapTop = $(".state-number").offset().top;
    var istrue = true;
    $(window).on("scroll",
        function () {
            var s = $(window).scrollTop();
            if (s > wrapTop - 500 && istrue) {
                $(".timer").each(count);

                function count(a) {
                    var b = $(this);
                    a = $.extend({},
                        a || {},
                        b.data("countToOptions") || {});
                    b.countTo(a)
                };
                istrue = false;
            };
        })

    //联系我们会话框
    $('.contact-us .us').click(function () {
        $('.popup').css('display', 'block')
    })
    $('.contact-icon').click(function () {
        $('.popup').css('display', 'none')
    })

    /*滚动条滚动，对应的"rightsidebar"变化*/
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop()
        if (scrollTop > 150) {
            var TOP = 150 + scrollTop / 16
            // console.log(TOP)
            $(".rightsidebar").stop().animate({
                top: TOP
            })
        }
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