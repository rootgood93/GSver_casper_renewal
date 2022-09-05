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

            // 햄버거버튼
            $('.ham.close').click(() => {
                $('.ham.open, .ham.close').removeClass('on')
            })


            // 모바일 sub 슬라이드 토글
            $('.gnb>ul>li>a').click(function () {
                if ($(this).parent().attr('class') != 'on') {
                    // .gnb>ul>li>a의 부모의 클래스가 on이 아닐 때,
                    $('.sub').slideUp()
                    // sub가 슬라이드업 된다 (위쪽으로 사라짐)
                    $(this).next().slideToggle();
                    // .gnb>ul>li>a의 바로 다음 요소(.sub)가 슬라이드 토글 된다
                    $(".gnb>ul>li").removeClass("on");
                    // .gnb>ul>li에 있는 클래스 on을 다 제거한다
                    $(this).parent().addClass("on");
                    // 이것(.gnb>ul>li>a)의 부모(=.gnb>ul>li)의 클래스 on을 붙여준다
                } else {
                    // 그 외에
                    $(this).next().slideToggle();
                    // .gnb>ul>li>a의 바로 다음 요소가(.sub) 슬라이드 토글 된다
                    $(this).parent().removeClass("on");
                    // .gnb>ul>li>a의 부모의 클래스 on을 제거한다
                }
            })



        })