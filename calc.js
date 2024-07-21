
document.addEventListener('DOMContentLoaded', function() {
    let tds = document.querySelectorAll('td')
    let inPut = document.querySelector('.mainInput')
    let calWindow = document.querySelector('.calWindow')
    let grayText = document.querySelector('.grayText')
    let grayNUM;
    let result = 0;
    let calcState;
tds.forEach(td => {
    td.addEventListener('click',function(){
        let tdAttr = td.getAttribute('data-number')
        
        // 숫자 입력
        if(tdAttr == 0 || tdAttr ==1 || tdAttr ==2 || tdAttr ==3 || 
        tdAttr ==4 || tdAttr ==5 || tdAttr ==6
        ||tdAttr ==7 || tdAttr ==8 || tdAttr ==9 ||tdAttr =='.') {
            windowCall(tdAttr)
        //리셋함수호출
        }else if (tdAttr == 'reset') {
            windowReset();
        }else if(tdAttr == 'plus') {
            calcState = 'plus';
            plusPlay();
            
        }else if(tdAttr == 'equals') {
            resultPrint();
        }
        });
        })


// 키보드  입력
window.addEventListener('keydown',function(){
    keyPut();
})
function keyPut() {
    // console.log(event.keyCode)
    let keyCondition1 = (event.keyCode > 47 && event.keyCode <58) || (event.keyCode > 95 && event.keyCode <106 || (event.keyCode ==190) || (event.keyCode ==110)) ;
        if(keyCondition1){
            windowCall(event.key)
        }else if(event.keyCode ==27) { //esc키 클릭
            windowReset();
        }else if(event.keyCode ==107) { //+ 키 클릭
            plusPlay();
        }else if(event.keyCode ==13) { //enter클릭
            resultPrint();
        }
}
// 화면에 입력숫자 표시 
function windowCall(num) {
    inPut.innerHTML += num;
}

// 계산기 리셋함수
function windowReset() {
    console.log('리셋함수실행!!!!!!!!!!!!!!!')
    inPut.innerHTML ='';
    grayText.innerHTML ='';
    result = 0;
}

// 결과값 출력 함수
function resultPrint() {
    console.log('결과값 출력 함수 실행!!!!!!!!!!!!!!!')
    console.log(result)
    if(calcState== plus) {
        num_1 = inPut.innerHTML;
        num_1 = Number(num_1);
    }
}

//인풋값 가져와서 숫자로 형변환 시켜주는 함수 
function inputTrans() {
    num_1 = inPut.innerHTML;
    num_1 = Number(num_1);
        return num_1;

}


function plusPlay() {
    let num_1;
    grayTextfunc('plus');
    inputTrans();
    calcState = 'plus';

    result = result + num_1;
    inPut.innerHTML ='';
        if(event.keyCode ==13) { //enter클릭
            result = result + num_1;

        }
    // console.log(result)


}

function grayTextfunc(symbol){
    console.log('그레이텍스트 함수 시작!');
        if (symbol == 'plus') {
            grayText.innerHTML = inPut.innerHTML +'+'
        }
    }
});