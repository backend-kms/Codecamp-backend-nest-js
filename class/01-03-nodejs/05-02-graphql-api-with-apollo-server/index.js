// npm add @apollo/server graphql

// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server'

// 따로 swagger 만들 필요 없음
// 타입 명시 해야함
// 쿼리에서 hello 요청하면 스트링 타입 나온다는 말
const myTypeDefs = gql`
    type Query {
    "A simple type for getting started!"
    hello: String
    }
`;

// 이름 마음대로 바꿀 수 있음
const myResolvers = {
    // Query: {
    //     hello: () => {
    //         return 'Hello World'
    //     },
    // },
    // 생략 가능
    Query: {
        hello: () => 'Hello World'
    },
};

// 초기 셋팅
const server = new ApolloServer({
    typeDefs: myTypeDefs,
    resolvers: myResolvers,
});

server.listen(3000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url} on port ${3000}`);
});