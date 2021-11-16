function getToken(count){
    if(count === undefined){
        return "에러발생!!! 갯수를 입력해 주세요."
    } else if(count <= 0){
        return "에러발생!!! 갯수가 너무 적습니다."
    } else if(count > 10){
        return "에러발생!!! 갯수가 너무 많습니다."
    } else {
        return String(Math.floor(Math.random() * 10**count)).padStart(count, "0")
    }
}