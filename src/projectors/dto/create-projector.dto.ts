import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateProjectorDto {
  @IsString()
  @IsNotEmpty()
  brand!: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  high!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  width!: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  theaterId?: number;
}
