export function getWelcomeTemplate({name, age, school, createdAt}){
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

export function sendWelcomeTemplateToEmail(template, email){
    // 템플릿을 이메일에 전송
    console.log(`${email}로 템플릿 ${template}를 전송합니다.`)
}