import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 여러개의 테스트 모아놓은 그룹 단위 ?
describe('AppController', () => {
  let appController: AppController;

  // Testing 이전에 실행되는 부분
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  // 여러개의 테스트 모아놓은 그룹 단위
  describe('root', () => {
    // 하나의 테스트 단위
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
