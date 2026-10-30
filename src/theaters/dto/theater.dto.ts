import { Type } from 'class-transformer';
import { IsInt, IsString, Max, MaxLength, Min } from 'class-validator';

export class TheaterDto {
  @IsString()
  @MaxLength(120)
  location?: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(1000)
  capacity?: number;
}
