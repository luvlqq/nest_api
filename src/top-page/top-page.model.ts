export enum TopLevelCategory {
  Course,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  firstLevelCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advanteges: {
    title: string;
    description: string;
  }[];
  seoText: string;
  textTitle: string;
  tags: string[];
}
