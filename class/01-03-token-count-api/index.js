import { getToken, checkValidationPhone, sendTokenToSMS } from './phone.js'

// 함수 만들기
function createTokenOfPhone(phone){
    const isValidationPhone = checkValidationPhone(phone)
    if(isValidationPhone){
        const token = getToken(6)
    
        sendTokenToSMS(token, phone)
    }
}

// 함수 실행하기
const myPhoneNumber = "01012345678"
createTokenOfPhone(myPhoneNumber)