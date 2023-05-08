import { getToday } from './utils.js'
import nodemailer from 'nodemailer' // npm add nodemailer 모듈 설치

export function checkValidationEmail(email) {
    if (email === undefined || !email.includes('@')) {
        console.log("정확한 이메일 주소를 입력해주세요.")
        return false
    } else {
        return true
    }
}


// 가입일은 사용자가 입력하는 날짜가 아닌, 실제 회원이 가입한 날짜가 되어야 함 -> Date 객체 활용 (utils.js)
export function getWelcomeTemplate({ name, age, school }) {
    return `
        <html>
            <body>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 500px;">
                        <h1>${name}님 가입을 환영합니다.</h1>
                        <hr />
                        <div style="color: blue;">이름: ${name}</div>
                        <div>나이: ${age}살</div>
                        <div>학교: ${school}</div>
                        <div>가입일: ${getToday()}</div>
                    </div>
                </div>
            </body>
        </html>
    `
}

export async function sendWelcomeTemplateToEmail(email, mytemplate) {
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    })
    const res = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: email,
        subject: "[node.js test] 회원 가입을 축하합니다.",
        html: mytemplate
    })

    console.log(res)


    // console.log(`${email}로 템플릿 ${template}를 전송합니다.`)
}