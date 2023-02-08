import { IsNumber, IsString, Max } from 'class-validator';
import { Min } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  name: string;
  @IsString()
  title: string;
  @IsString()
  description: string;

  // TODO min class-validator
  @Max(5)
  @Min(1)
  @IsNumber()
  rating: number;
  @IsString()
  productId: string;
}
