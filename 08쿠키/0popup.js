/* 쿠키생성 함수 */
function createCookie(name) {
  console.log(name);
  //1. 쿠키 생명주기
  var date = new Date();
  date.setDate(date.getDate() + 1);//1일 생명

  //2. 쿠키 형식 설정
  var cookie = "";
  cookie += name + "=true;";//쿠키 이름, 값 설정
  cookie += "expires=" + date.toUTCString();//현재시간->국제시간 변경
  document.cookie = cookie;
}

/* 쿠키 찾기함수 */
function getCookie(name) {
  var cookies = document.cookie.split("; ");//;(공백)기준으로 잘라줌

  //쿠키를 확인
  for (var i in cookies) {
    /* 찾는 이름이 존재한다면 => -1이 아니다 */
    if (cookies[i].search(name) != -1) {
      return true;//true리턴

    }
    //아무 값이 없다면 return false
  }


}