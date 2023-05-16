const fetchData = async () => {
  // API 보내기 요청 !!

  const result = await new Promise((성공시함수, 실패시함수) => {
    setTimeout(() => {
      try {
        console.log("이미지 받아왔다."); // 5초 뒤에 이미지 url 받아옴
        성공시함수("강아지.jpg");
      } catch {
        실패시함수("실패 했다.");
      }
    }, 5000);
  });
  console.log(result);

  console.log("받아온 강아지.jpg 브라우저 잔달!");
};

fetchData();
