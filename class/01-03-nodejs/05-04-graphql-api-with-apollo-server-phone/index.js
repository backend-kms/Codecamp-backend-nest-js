// npm add @apollo/server graphql

// const { ApolloServer, gql } = require('apollo-server');
// import { ApolloServer, gql } from 'apollo-server'
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';

// api-docs를 구성하고 응답으로 돌려줄 타입을 정의해 주는 부분
const typeDefs = `#graphql
    type BoardReturn {
        number: Int
        writer: String
        title: String
        contents: String
    }

    type Query {
        # fetchBoards: BoardReturn => 객체 1개를 의미
        fetchBoards: [BoardReturn] # => 배열 안에 객체 1개 이상을 의미
    }
    
    input CreateBoardInput {
        writer: String
        title: String
        contents: String
    }

    type Mutation {
        # createBoard(writer: String, title: String, contents: String): String # => 입력값을 낱개로 받아오는 것을 의미
        createBoard(createBoardInput: CreateBoardInput!): String # => 입력값을 객체로 받아오는 것을 의미
        createTokenOfPhone(myphone: String): String
    }
    
    `;

// express의 API와 같음
const resolvers = {
    Query: {
        fetchBoards: () => {
            // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
            const result = [
                {
                    number: 1,
                    writer: '철수',
                    title: '제목입니다~~',
                    contents: '내용이에요@@@',
                },
                {
                    number: 2,
                    writer: '영희',
                    title: '영희 제목입니다~~',
                    contents: '영희 내용이에요@@@',
                },
                {
                    number: 3,
                    writer: '훈이',
                    title: '훈이 제목입니다~~',
                    contents: '훈이 내용이에요@@@',
                },
            ];

            // 2. 꺼내 온 결과 응답주기
            return result; // REST-API: res.send // GraphQL-API: return
        }
    },
    Mutation: {
        createTokenOfPhone: (_, args) => {
            // 1. 휴대폰 번호 자릿수 맞는지 확인하기
            const isValid = checkValidationPhone(args.myphone)
            if (isValid) {
                // 2. 핸드폰 토큰 6자리 만들기
                const mytoken = getToken();
                // 3. 핸드폰 번호에 토큰 전송하기
                sendTokenToSMS(args.myphone, mytoken);
                return '인증 완료';
            }
        }
        // createBoard: (parent, args, context, info)
        // parent: 부모타입 resolver에서 반환된 결과를 가진 객체
        // args: 쿼리 요청 시 전달된 parameter를 가진 객체
        // context: GraphQL의 모든 resolver가 공유하는 객체로서 로그인 인증, 데이터베이스 접근 권한 등에 사용
        // info: 명령 실행 상태 정보를 가진 객체
    }
};

// 초기 셋팅
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    cors: true, // 모든 사이트 허용
    // cors: {origin:["", ""]} 특정 사이트 허용
});

// server.listen(3000).then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`);
// });

const { url } = await startStandaloneServer(server); // 기본적으로 4000
console.log(`🚀 Server ready at ${url}`);