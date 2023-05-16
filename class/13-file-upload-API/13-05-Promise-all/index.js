// const fetchData = async () => {
//   // API 보내기 요청 !!

//   const result = await new Promise((성공시함수, 실패시함수) => {
//     setTimeout(() => {
//       try {
//         console.log("이미지 받아왔다."); // 5초 뒤에 이미지 url 받아옴
//         성공시함수("강아지.jpg");
//       } catch {
//         실패시함수("실패 했다.");
//       }
//     }, 5000);
//   });
//   console.log(result);

//   console.log("받아온 강아지.jpg 브라우저 잔달!");
// };

// fetchData();

const fetchData = async () => {
  console.time("=== 개별 Promise 각각 ===");
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공!!");
    }, 2000);
  });

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공!!");
    }, 3000);
  });

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공!!");
    }, 1000);
  });
  console.timeEnd("=== 개별 Promise 각각 ===");
};

fetchData();

const fetchData2 = async () => {
  console.time("=== 한방 Promise.all ==="); // await Promise.all( [new Promise(), new Promise(), new Promise()] )
  const result = await Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공!!");
      }, 2000);
    }),

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공!!");
      }, 3000);
    }),

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공!!");
      }, 1000);
    }),
  ]);
  console.log(result);
  console.timeEnd("=== 한방 Promise.all ===");
};

fetchData2(); //
