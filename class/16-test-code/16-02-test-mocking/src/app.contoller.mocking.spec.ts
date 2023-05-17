import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 모형 db 만들때 자주 사용함 // 이건 함수 모킹

class MockAppService {
  getHello(): string {
    return '나는 가짜다.';
  }
}

describe('AppController', () => {
  let appService: AppService;
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService, // AppService 처럼 생긴 자리에 = controller의 AppService
          useClass: MockAppService, // 가짜 서비스를 넣어주고 싶다
        },
      ],
    }).compile(); // compile 최적화

    appController = app.get<AppController>(AppController);
  });

  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World!를 리턴해야함.', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

/* 실행 npm test or npm test -- --verbose */
