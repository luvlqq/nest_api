import { Injectable } from '@nestjs/common';
import { ReviewModule } from './review.module';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { CreateReviewDto } from './dto/create-review.dto';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModule)
    private readonly reviewModel: ModelType<ReviewModule>,
  ) {}

  async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModule>> {
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<ReviewModule> | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(
    productId: string,
  ): Promise<DocumentType<ReviewModule>[]> {
    return this.reviewModel
      .find({ productId: new Types.ObjectId(productId) })
      .exec();
  }

  async deleteByProductId(productId: string) {
    return this.reviewModel.deleteMany({
      productId: new Types.ObjectId(productId),
    }).exec;
  }
}
