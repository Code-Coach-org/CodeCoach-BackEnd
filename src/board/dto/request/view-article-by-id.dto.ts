import { PickType } from '@nestjs/mapped-types';
import { BaseArticleDto } from '../base-article.dto';

export class ViewArticleByIdDto extends PickType(BaseArticleDto, ['articleId']) {}
