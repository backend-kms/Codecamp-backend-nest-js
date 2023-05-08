/* 설치
npm add swagger-ui-express
npm add swagger-jsdoc */

// const express = require('express')
import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsdoc = require('swagger-jsdoc');
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'

const app = express()

// const swaggerSpec = swaggerJsdoc(options);

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get('/boards', (req, res) => {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
        { number: 1, writer: "철수", title: "철수 제목입니다.", content: "철수 내용입니다." },
        { number: 2, writer: "유리", title: "유리 제목입니다.", content: "유리 내용입니다." },
        { number: 3, writer: "훈이", title: "훈이 제목입니다.", content: "훈이 내용입니다." },
    ]

    // 2. 꺼내온 결과 응답 주기
    res.send(result)
})

app.post('/boards', (req, res) => {
    // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
    console.log(req.body)
    // 2. 저장 결과 응답 주기
    res.send("게시물 등록에 성공하였습니다.")
})

app.post('/tokens/phone', (req, res) => {
    const myphone = req.body.aaa
    // 1. 휴대폰 번호의 자릿수가 맞는 지 확인하기 (번호 점검)
    const isValid = checkValidationPhone(myphone)
    if (isValid) {
        // 2. 인증 토큰을 6자리 만들기 (토큰 발급)
        const mytoken = getToken()
        // 3. 핸드폰 번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken)
        res.send("인증 완료")
    }
})

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
})