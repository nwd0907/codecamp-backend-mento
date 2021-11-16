const apple = 3
const banana = 2
console.log("철수는 사과를 " + apple + "개, " + "바나나를 " + banana + "개 가지고 있습니다.")
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`) // 템플릿 리터럴

function getWelcomeTemplate(){
    const name = "철수"
    const age = 13
    const school = "다람쥐초등학교"
    const createdAt = "2010-09-07"
    
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <span>이름: ${name}</span>
                <span>나이: ${age}살</span>
                <span>학교: ${school}</span>
                <span>가입일: ${createdAt}</span>
            </body>
        </html>
    `
}
