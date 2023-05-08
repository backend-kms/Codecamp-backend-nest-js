function Controller(aaaaa: any) {
    console.log("=============")
    console.log(aaaaa) // 출력 [class CatsController]
    console.log("=============")
}

@Controller // @Controller에 CatsController가 인자로 들어감
class CatsController {

}