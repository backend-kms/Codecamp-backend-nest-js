import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { IFilesServiceUpload } from './interfaces/files-service.interface';

@Injectable()
export class FilesService {
  async upload({ files }: IFilesServiceUpload): Promise<string[]> {
    console.log(files);

    const waitedFiles = [];
    waitedFiles[0] = await files[0];
    waitedFiles[1] = await files[1];

    console.log(waitedFiles); // [File, File]

    // 1. 파일을 클라우드 스토리지에 저장하는 로직

    // 1-1) 스토리지 셋팅하기
    const bucket = '내가만든버킷이름';
    const storage = new Storage({
      projectId: '프로젝트아이디',
      keyFilename: '암호파일이름',
    }).bucket(bucket);

    // 1-2) 스토리지에 파일 올리기
    console.time('시간을 확 인해보자!!');
    const results = [];
    for (let i = 0; i < waitedFiles.length; i++) {
      results[i] = await new Promise((resolve, reject) =>
        waitedFiles[i]
          .createReadStream()
          .pipe(storage.file(waitedFiles[i].filename).createWriteStream())
          .on('finish', () => resolve('성공'))
          .on('error', () => reject('실패')),
      );
    }
    console.timeEnd('시간을 확인해보자!!');
    // console.log("파일전송이 완료되었습니다.")
    // console.log(result)

    // 2. 다운로드URL 브라우저에 돌려주기
    return results;
  }
}
