    var Links = {
        setColor:function (color){
            // var alist = document.querySelectorAll('a');
            // var i = 0 ;
            // while (i < alist.length) {
            //         alist[i].style.color = color;
            //         i = i+1 ;
            //     }
            $('a').css('color', color); // jQouery 라이브러리 코드 복사
        }
    }
    var Body = {
        setColor:function (color){
            $('body').css('color', color);
            // document.querySelector('body').style.color = color;
        },  // 객체는 객체의 프로퍼티와 프로퍼티를 구분할때 콤마를 찍는다.
        setBackgroundColor:function (color){
            // document.querySelector('body').style.backgroundColor = color;
            $('body').css('backgroundColor',color);
        }
    }
    function nightDayHandler(self){ 
        var target = document.querySelector('body');
            if (self.value === 'night'){
                Body.setBackgroundColor('black');
                Body.setColor('white');
                self.value = 'day';

                Links.setColor('yellow');
        }   else { 
                Body.setBackgroundColor('white');
                Body.setColor('black');
                self.value = 'night';

                Links.setColor('blue');
            }
    }
    // this 값은  onclick 이라는 이벤트 안에서 this는 이 이벤트가 소속된 이 태그를 가르키도록 약속되어있는데
    // 독립된 함수를 만들면 여기있는 this는 input 버튼이 아니고 전역객체를 가르키게된다. 웹브라우저에서는 윈도우가 된다. 지금은 이해 못할 수 있다.
