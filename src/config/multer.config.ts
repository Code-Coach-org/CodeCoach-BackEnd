import { BadRequestException, HttpException } from "@nestjs/common";
import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerDiskDestinationOutOptions = {
  fileFilter: (request, file, callback) => {
    // 이미지 형식은 jpg, jpeg, png만 허용
    if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      callback(null, true);
    } else {
      callback(
        new BadRequestException("지원하지 않는 지원 형식입니다."),
        false
      );
    }
  },
  storage: diskStorage({
    filename: (request, file, callback) => {
      //파일 이름 설정
      callback(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),
  /**
   * @property {number} limits.fieldNameSize 필드명 사이즈 최대값 (기본값 100bytes)
   * @property {number} limits.filedSize 필드 사이즈 값 설정 (기본값 1MB)
   * @property {number} limits.fields 파일 형식이 아닌 필드의 최대 개수 (기본 값 무제한)
   * @property {number} limits.fileSize multipart 형식 폼에서 최대 파일 사이즈(bytes) "16MB 설정" (기본 값 무제한)
   * @property {number} limits.files multipart 형식 폼에서 파일 필드 최대 개수 (기본 값 무제한)
   */
  limits: {
    fieldNameSize: 200,
    filedSize: 1024 * 1024,
    fields: 2,
    fileSize: 16777216,
    files: 10,
  },
};

// TODO::production 환경 분리
export const uploadFileURL = (fileName): string =>
  `http://localhost:${process.env.SERVER_PORT}/${fileName}`;