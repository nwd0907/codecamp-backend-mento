import { getWelcomeTemplate, sendWelcomeTemplateToEmail } from './email.js'
import { getCreatedAt } from './utils.js'

function createUser(user){
    const template = getWelcomeTemplate(user)
    
    sendWelcomeTemplateToEmail(template, user.email)
}

const user = {
    name: "철수",
    age: 13,
    school: "다람쥐초등학교",
    email: "aaa@aaa.com",
    createdAt: getCreatedAt(),
}
createUser(user)