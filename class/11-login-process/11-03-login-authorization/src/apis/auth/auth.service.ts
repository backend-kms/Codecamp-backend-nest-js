import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
} from './interfaces/auth-service.interface';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService, //
  ) {}
  async login({ email, password }: IAuthServiceLogin): Promise<string> {
    // 1. 이메일이 일치하는 유저를 db에서 찾기
    const user = await this.usersService.findOneByEmail({ email });
    // 2. 일치하는 유저가 없으면 에러 발생
    if (!user)
      throw new UnprocessableEntityException('이메일이 존재하지 않습니다.');

    // 3. 입력한 비밀번호와 db의 비밀번호와 비교
    const isAuth = await bcrypt.compare(password, user.password);

    // 4. 비밀번호가 일치하지 않으면 에러 발생
    if (!isAuth)
      throw new UnprocessableEntityException('암호가 일치하지 않습니다.');

    // 5. 일치하는 유저와 올바른 비밀번호
    //    => accessToken(=JWT)를 만들어서 브라우저에 전달하기
    return this.getAccessToken({ user });
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.id },
      { secret: '나의 비밀번호', expiresIn: '1h' },
    );
  }
}
