function handleJoin(){

    const userId = document.querySelector("input[name=userId]").value;
    const userPw = document.querySelector("input[name=userPw]").value;
    const userPw2 = document.querySelector("input[name=userPw2]").value;
    const userNick = document.querySelector("input[name=userNick]").value;

    //id (영어 소문자 및 숫자 허용, 4~8글자)
    const idOk = /^[a-z0-9]{4,8}$/.test(userId);

    //pw (숫자만 4~8)
    const pwOk1 = /^[0-9]{4,8}$/.test(userPw);
    const pwOk2 = userPw === userPw2;
    const pwOk = pwOk1 && pwOk2;


    //nick (한글만 4~8)
    const nickOk = /^[가-힣]{4,8}$/.test(userNick);
   
   // id
    if(!idOk){
        alert('아이디 확인 바람');
        return false;
    }

   // pw
    if(!pwOk){
        alert('비밀번호 확인 바람');
        return false;
    }

   // nick
    if(!nickOk){
        alert('닉네임 확인 바람');
        return false;
    }


    
}