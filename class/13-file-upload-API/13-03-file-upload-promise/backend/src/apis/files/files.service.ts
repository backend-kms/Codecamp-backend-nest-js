import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { IFilesServiceUpload } from './interfaces/files-service.interface';

@Injectable()
export class FilesService {
  async upload({ file }: IFilesServiceUpload): Promise<string> {
    console.log(file);
    // 1. 파일을 클라우드 스토리지에 저장하는 로직

    // 1-1) 스토리지 셋팅하기
    const storage = new Storage({
      projectId: 'backend-386902',
      keyFilename: 'backend-386902-9405c090280e.json',
    }).bucket('codecamp-min-storage');

    // 1-2) 스토리지에 파일 올리기

    await new Promise<string>((resolve, reject) =>
      file
        .createReadStream()
        .pipe(storage.file(file.filename).createWriteStream())
        .on('finish', () => {
          console.log('성공');
          resolve('끝');
        })
        .on('error', () => console.log('실패')),
    );
    console.log('파일전송이 완료되었습니다.');

    return '임시작성';
  }
}
