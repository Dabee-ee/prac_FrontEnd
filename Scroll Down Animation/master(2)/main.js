// $(document).ready(function(){
$(function (){
    var $menu = $('#top_menu ul li'),
        $contents = $('#contents > div');


    /* $menu를 클릭하면 해당 요소에만 클래스명 on 추가 되도록 */
    $menu.click(function (x){
        x.preventDefault();

        /* 스크롤 기능 추가를 위해 잠시 주석 처리 */
        // $(this).addClass('on').siblings().removeClass('on');

        /* 현재 위치한 div의 인덱스 번호 */
        var idx = $(this).index();

        /* 메뉴 이름과 상응하는 인덱스 번호를 변수에 저장 */
        var section = $contents.eq(idx);

        /* 각 div의 top 위치를 알기 위해 선택자.offset().top; 이용
        즉, 바디 상단부터 현재 div 상단까지의 거리를 구해온다. */
        var sectionDistance = section.offset().top;

        // console.log(sectionDistance);
        // A.scrollTop() 스트롤 양을 확인
        $('html,body').stop().animate({scrollTop:sectionDistance});
    });

    /* 윈도우 스크롤이 생기면 $contents를 마다 할 일
       각각의 화면 상단에서의 거리 sectionDistance 보다
       스크롤양이 많은지 적은지,.. 많다는 조건이 참이면
       각 요소마다 순번 변수명 idx 저장!
       그 순번에 해당하는 메뉴에만 클래스명 on 추가 */

    $(window).scroll(function (){
        $contents.each(function (){
            if($(this).offset().top <= $(window).scrollTop()) {
                var idx = $(this).index();
                $menu.removeClass('on');
                $menu.eq(idx+1).addClass('on');
            }
        });
    });
});
