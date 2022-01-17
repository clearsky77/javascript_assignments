const user_form = document.querySelector("#user_form");

function playGame(event){
    event.preventDefault(); // 이벤트 실행을 막는다. 새로고침 안됨.

    console.log(user_form.edtLimitNum.value); // 여기서 edtLimitNum은 input 태그 name이다.
    console.log(user_form.edtUserNum.value);
    // console.log(user_form.post[0].value); // 이런 형태로도 가능하다. name이 value인 input태그 여러개.
    // console.log(user_form.post[1].value);
}

user_form.addEventListener("submit",playGame); // form에 submit 기능을 넣는다.