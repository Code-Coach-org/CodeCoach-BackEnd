import { PickType } from '@nestjs/mapped-types';
import { BaseArticleDto } from '../base-article.dto';

export class DeleteArticleByIdDto extends PickType(BaseArticleDto, ['articleId']) {}