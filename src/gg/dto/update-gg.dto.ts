import { PartialType } from '@nestjs/mapped-types';
import { CreateGgDto } from './create-gg.dto';

export class UpdateGgDto extends PartialType(CreateGgDto) {}
