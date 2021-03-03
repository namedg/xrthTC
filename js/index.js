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
            $('.wrap').css('margin-top','101px')
        } else {
            $('.header').css({
                "position": "relative",
            })
            $('.wrap').css('margin-top',0)
        }
    })



    /*主页头部鼠标悬浮效果*/
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

    /*中心头部切换轮播效果*/

    $(".carousel .banner1 li").slice(0, 3).clone(true).appendTo(".banner1")
    $(".carousel .banner2 li").slice(0, 3).clone(true).appendTo(".banner2")
    $(".carousel .banner3 li").slice(0, 3).clone(true).appendTo(".banner3")

    $(".nav2 li a").first().css("color", "#fff")

    $(".nav2 li").mouseenter(function () {
        $(this).addClass("active").prepend().siblings().removeClass("active")
        $(this).find("a").css("color", "#fff").parent().siblings().find("a").css("color",
            "#3571b6")
    })

    /*切换*/
    $(".nav2 li").mouseenter(function () {
        var n = $(this).index()
        $(".carousel ul").eq(n).fadeIn(1000).siblings().fadeOut(100)

    })

    var index2 = 0
    var timer2
    var flag2 = true

    $(".one .right").click(function () {
        if (flag2) {
            flag2 = false
            index2++;
            if (index2 == 4) {
                $(".carousel ul").animate({
                    "left": -337 * index2
                }, 500, function () {
                    $(".carousel ul").css("left", 0);
                    flag2 = true
                })

                index2 = 0
            } else {
                $(".carousel ul").animate({
                    "left": -337 * index2
                }, 500, function () {
                    flag2 = true
                })
            }
        }

    })

    $(".one .left").click(function () {
        if (flag2) {
            flag2 = false
            index2--;

            if (index2 == -1) {
                $(".carousel ul").css("left", -337 * 4)
                index2 = 3
            }
            $(".carousel ul").animate({
                "left": -337 * index2
            }, 500, function () {
                flag2 = true
            })
        }

    })

    timer2 = setInterval(function () {
        $(".one .right").click()
    }, 3000)

    $(".carousel").hover(function () {
        clearInterval(timer2)
    }, function () {
        timer2 = setInterval(function () {
            $(".one .right").click()
        }, 3000)
    })

    var offsetLeft = 0
    var timer3
    var index3 = 0

    function autoplay() {
        timer3 = setInterval(function () {
            offsetLeft -= 305
            index3++
            // console.log(index3)
            if (index3 > 4) {
                index3 = 0
                // console.log(index3)
                $(".dots li").eq(index3).addClass("active").siblings().removeClass("active")
            } else {
                $(".dots li").eq(index3).addClass("active").siblings().removeClass("active")
            }

            $(".two-hot .center .turn").animate({
                "marginLeft": offsetLeft,
            }, 500, function () {
                if (offsetLeft == -1220) {
                    offsetLeft = 305
                    $(".parent").css(
                        "marginLeft", offsetLeft
                    )
                }
            })
        }, 1500)
    }
    autoplay()

    $(".dots li").click(function () {
        var CK = 0;
        var DIS = 0;
        CK = $(this).index()
        DIS = CK * 305
        // console.log(DIS)
        // console.log(CK)
        $(".two-hot .center .turn").animate({
            "marginLeft": -DIS
        }, 500)
        $(".dots li").eq(CK).addClass("active").siblings().removeClass("active")
    })

    $(".two-hot .center").hover(function () {
        clearInterval(timer3)
    }, function () {
        autoplay()
    })


    var index4 = 0
    var timer4
    var flag = true

    $(".two .two-hot .more .rg-btn .right").click(function () {
        if (flag) {
            flag = false
            index4++;
            // console.log(index4)
            if (index4 == 3) {
                $(".two .two-hot .more .turn2").animate({
                    "left": -360 * index4
                }, 500, function () {
                    $(".two .two-hot .more .turn2").css("left", 0);
                    flag = true
                })

                index4 = 0
            } else {
                $(".two .two-hot .more .turn2").animate({
                    "left": -360 * index4
                }, 500, function () {
                    flag = true
                })
            }
        }
    })

    $(".two .two-hot .more .rg-btn .left").click(function () {
        if (flag) {
            flag = false
            index4--;
            console.log(index4)
            // 设置临界值
            if (index4 == -1) {
                $(".two .two-hot .more .turn2").css("left", -360 * 3)
                index4 = 2
            }
            $(".two .two-hot .more .turn2").animate({
                "left": -360 * index4
            }, 500, function () {
                flag = true
            })
        }
    })

    timer4 = setInterval(function () {
        $(".two .two-hot .more .rg-btn .right").click()
    }, 1500)

    $(".two .two-hot .more").hover(function () {
        clearInterval(timer4)
    }, function () {
        timer4 = setInterval(function () {
            $(".two .two-hot .more .rg-btn .right").click()
        }, 1500)
    })

    // 动态数据展示

    $.fn.numberRun = function (options) {
        var defaultOptions = {
            speed: 24, // 速度
            number: 100, // 需要滚动到的数字
            attr: false, // 是否从attr中获取相关参数
            callback: function () { } // 回调函数
        };
        var options = $.extend({}, defaultOptions, options);
        var domObj = this;
        if (options.attr) {
            options.speed = parseInt(domObj.attr("speed"));
            options.number = domObj.attr("number");
        }
        var baseNum = 100,
            number = options.number,
            speed = Math.floor(number / baseNum),
            sum = 0,
            step = 1,
            int_speed = parseInt(options.speed);
        var timer = setInterval(function () {
            if (step <= baseNum && speed != 0) {
                domObj.text(sum = speed * step);
                step++;
            } else if (sum < number) {
                domObj.text(++sum);
            } else {
                clearInterval(timer);
                // 最终的结果确保小数的情况
                domObj.text(options.number);
                // 执行一次 callback
                options.callback();
            }
        }, int_speed);
    };

    $("#num1").numberRun({
        attr: true
    });
    $("#num2").numberRun({
        attr: true
    });
    $("#num3").numberRun({
        attr: true
    });
    $("#num4").numberRun({
        attr: true
    });
    $("#num5").numberRun({
        attr: true
    });


    var oldScroll = 0;
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop()
        // console.log(scrollTop)
        if (scrollTop > 1560 && scrollTop < 1800 && scrollTop > oldScroll) {
            oldScroll = scrollTop
            $("#num1").numberRun({
                attr: true
            });
            $("#num2").numberRun({
                attr: true
            });
            $("#num3").numberRun({
                attr: true
            });
            $("#num4").numberRun({
                attr: true
            });
            $("#num5").numberRun({
                attr: true
            });
        } else {
            oldScroll = scrollTop
            $("#num1").text(3276)
            $("#num2").text(999)
            $("#num3").text(99)
            $("#num4").text(10)
            $("#num5").text(99)
        }
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