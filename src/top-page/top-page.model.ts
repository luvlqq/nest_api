import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Course,
  Services,
  Books,
  Products,
}

export class HhData {
  @prop()
  count: number;
  @prop()
  juniorSalary: number;
  @prop()
  middleSalary: number;
  @prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;
  @prop()
  description: string;
}
export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstLevelCategory: TopLevelCategory;
  @prop()
  secondCategory: string;
  @prop({ unique: true })
  alias: string;
  @prop()
  title: string;
  @prop()
  category: string;

  @prop({type: () => HhData})
  hh?: HhData;
  @prop({ type: () => [TopPageAdvantage] })
  advanteges: TopPageAdvantage[];
  @prop()
  seoText: string;
  @prop()
  textTitle: string;
  @prop({ type: () => [String] })
  tags: string[];
}
