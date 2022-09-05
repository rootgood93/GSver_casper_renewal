        $(function () {
            // 맨위로 가기 버튼
            $('#back-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });


            // gnb 모바일 버전
            $('.icon_box .ham').click(() => {
                $('.ham.open, .ham.close').addClass('on')
                $('header .gnb').toggleClass('on')
                $('.hd_bg').toggleClass('on')
            })
            $('.ham.close').click(() => {
                $('.ham.open, .ham.close').removeClass('on')
            })
            
            // $('.gnb>ul>li>a').hide();
            $(".gnb>ul>li>a").click(function () {
                $(this).parent(".gnb>ul>li").children(".sub").slideToggle("100");
                // $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
            });




        })