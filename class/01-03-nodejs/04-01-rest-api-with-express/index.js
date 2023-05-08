// npm init -> npm add express -> node_modules 를 모르고 삭제했으면 npm install -> 굳이 github에 올릴 필요 없음
// import 쓸 거면 package.json에 "type": "module" 들어가야 함

// const express = require('express')
import express from 'express'

const app = express()
// const port = 3000

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// API 서버 실행(3000)
// listen: 접속을 기다림, 24시간 가동
// localhost = 127.0.0.1
// 백엔드 서버프로그램: 한 컴퓨터에서 같은 포트번호로 두개를 실행할 수 없음
// 포트번호 범위 0-65535
// mysql 기본 포트번호: 3306 (백엔드의 접속을 24시간 기다리는 엑셀)
app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
})