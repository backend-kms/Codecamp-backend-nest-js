import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { IFilesServiceUpload } from './interfaces/files-service.interface';

@Injectable()
export class FilesService {
  async upload({ files }: IFilesServiceUpload): Promise<string[]> {
    console.log(files);

    // const waitedFiles = [];
    // waitedFiles[0] = await files[0];
    // waitedFiles[1] = await files[1];
    // 아래처럼 한줄로 한방에 가능
    const waitedFiles = await Promise.all(files);

    console.log(waitedFiles); // [File, File]

    // 1. 파일을 클라우드 스토리지에 저장하는 로직

    // 1-1) 스토리지 셋팅하기
    const bucket = 'codecamp-min-storage';
    const storage = new Storage({
      projectId: 'backend-386902',
      keyFilename: 'gcp-file-storage.json',
    }).bucket(bucket);

    // 1-2) 스토리지에 파일 올리기
    const results = await Promise.all(
      waitedFiles.map(
        (el) =>
          new Promise<string>((resolve, reject) => {
            el.createReadStream()
              .pipe(storage.file(el.filename).createWriteStream())
              .on('finish', () => resolve(`${bucket}/${el.filename}`))
              .on('error', () => reject('실패'));
          }),
      ),
    );

    // 2. 다운로드URL 브라우저에 돌려주기
    return results;
  }
}
