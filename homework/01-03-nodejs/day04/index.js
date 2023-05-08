import express from 'express'
const app = express()

import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

/* 
회원 목록 조회 API 생성
*/
/* 
1. 명령어를 통해 day04 폴더 안에 package.json 파일을 자동으로 만들기
2. package.json 파일에 "type":"module" 추가
3. day04 폴더 안에 express, swagger-jsdoc, swagger-ui-express 설치
4. index.js 파일을 만들어 회원 목록을 조회하는 API 생성
    a. API Method는 GET 방식으로 조회
    b. API Endpoint는 /users
    c. Postman에서 해당 API를 요청했을 때, 하드코딩된 회원 5명의 데이터를 받아와야함
        -> 회원 1명의 데이터는 객체 1개이며, 총 5개의 객체를 하나의 배열로 담아와서 받음
    d. 각각의 회원 데이터는 email, name, phone, personal(주민등록번호), prefer(내가 좋아하는 사이트)이 반드시 포함되어야 함
    e. 만든 API를 Postman으로 요청했을 때 전체가 조회되면 완료
*/
app.get('/users', (req, res) => {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
        { email: "test@test.com", name: "철수", phone: "010-1234-1234.", personal: "000000-1111111", prefer: "철수가 좋아하는 사이트" },
        { email: "test2@test.com", name: "훈이", phone: "010-2345-2345.", personal: "111111-2222222", prefer: "훈이가 좋아하는 사이트" },
        { email: "test3@test.com", name: "유리", phone: "010-3456-3456.", personal: "222222-3333333", prefer: "유리가 좋아하는 사이트" },
        { email: "test4@test.com", name: "짱구", phone: "010-4567-4567.", personal: "333333-4444444", prefer: "짱구가 좋아하는 사이트" },
        { email: "test5@test.com", name: "맹구", phone: "010-5678-5678.", personal: "444444-5555555", prefer: "맹구가 좋아하는 사이트" },
    ]

    // 2. 꺼내온 결과 응답 주기
    res.send(result)
})

/* 
커피 목록을 조회하는 API 생성 
*/
/*
1. 커피 목록을 조회하는 API 만들기
    a. API method는 GET 방식으로 조회
    b. API Endpoint는 /starbucks
    c. Postman에서 해당 API를 요청했을 때, 하드 코딩된 커피 10개의 데이터를 받아와야 함
        -> 커피 1개의 데이터는 객체 1개이며, 총 10개의 객체를 하나의 배열로 담아서 받음
    d. 각각의 커피 데이터는 이름(name), 칼로리(kcal)가 반드시 포함되어야 함
*/

app.get('/starbucks', (req, res) => {
    const result = [
        { name: "아메리카노", kcal: "9" },
        { name: "카페라떼", kcal: "100" },
        { name: "카페모카", kcal: "120" },
        { name: "바닐라라떼", kcal: "150" },
        { name: "카라멜라떼", kcal: "140" },
        { name: "카라멜마끼아또", kcal: "200" },
        { name: "오트라떼", kcal: "200" },
        { name: "딸기라떼", kcal: "210" },
        { name: "자몽허니블랙티", kcal: "70" },
        { name: "민트초코프라푸치노", kcal: "300" }
    ]
    result.sort((a, b) => {
        return a.kcal - b.kcal;
    }); // 오름차순으로 정렬
    res.send(result)
})

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
})