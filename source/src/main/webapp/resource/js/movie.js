/**
 * 
 */
/* //bxslide*/
  $(document).ready(function () {
            if ($('div.banner ul').length > 0) {
                $('div.banner ul').bxSlider({
                    mode: 'fade',	//슬라이드 이동 방향
                    auto: true,		//슬라이드 전환 속도
                    autoHover: false,//정지 여부-> 마우스를 올려두면 정지됨
                    speed: 200,	
                    pager: false,	//슬라이드 (불릿) 버튼 노출 여부
               		//pagerType: 'short', 	// 1/3 이미지 몇 개인지 보여주는 거 
                   
                    //controller 부분 자동 생성
                    autoControls: false,	//시작 중지 버튼
                    autoControlsCombine: false	//슬라이드 쇼를 재생하면 "Stop" 컨트롤이 표시된다.
                });
            }
        });