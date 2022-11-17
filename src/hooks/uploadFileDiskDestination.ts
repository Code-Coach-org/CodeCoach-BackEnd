import * as fs from 'fs';
import { extname } from 'path';
import { uploadFileURL } from 'src/config/multer.config';
import { v4 as uuid } from 'uuid';

export const uploadFileDiskDestination = (file: Express.Multer.File, uploadFilePath: string) => {
    
    //파일 이름
    const fileName = uuid() + extname(file.filename);

    // 폴더가 존재하지 않을 시 생성 
    if (!fs.existsSync(uploadFilePath)) {
        fs.mkdirSync(uploadFilePath, { recursive: true });
    }

    //파일 업로드 경로
    const uploadPath =
    __dirname + `/../../${uploadFilePath + '/' + fileName}`;

    //파일 생성
    fs.copyFileSync(file.path, uploadPath);
    
    return uploadFileURL(uploadFilePath + '/' + fileName);
    
}