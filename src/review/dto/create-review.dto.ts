import { IsNumber, IsString, Max, Min } from 'class-validator';

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
function Min(arg0: number) {
  throw new Error('Function not implemented.');
}
