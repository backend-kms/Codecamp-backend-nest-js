import axios from "axios";

// 1. 비동기 방식: 현재 실행 중인 코드의 완료 여부와 무관하게 즉시 다음 코드로 넘어가서 실행
function fetchAsync() {
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log("비동기 방식: ", result) // 아웃풋: Promise{<pending>}
}

fetchAsync()

// 2. 동기 방식: 현재 실행 중인 코드가 완료된 후 다음 코드를 실행 (함수 중복 선언 문제 발생 가능성 있음)
// async function fetchSync() {
//     const result = await axios.get("https://koreanjson.com/posts/1")
//     console.log("동기 방식: ", result.data.title) // 아웃풋: 제대로된 결과}
//     console.log("동기 방식: ", result.data.content)
// }

// fetchSync()

// 2. 동기 방식: 현재 실행 중인 코드가 완료된 후 다음 코드를 실행 (함수 중복 선언 가능성 없음 -> 화살표 함수로 변경)
const fetchSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log("동기 방식: ", result.data.title) // 아웃풋: 제대로된 결과}
    console.log("동기 방식: ", result.data.content)
}

fetchSync()