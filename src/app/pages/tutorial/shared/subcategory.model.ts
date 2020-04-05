import { BaseEntity } from 'src/app/shared/models/base-entity.model';
import { Category } from './category.model';
import { Tutorial } from './tutorial.model';

export class Subcategory extends BaseEntity {
    private tutorialsList: Tutorial[] = [];

    constructor(
      public name?: string,
      public categoryId?: number,
      public category?: Category,
      public tutorials?: Tutorial[]
    ) { super(); }

    protected jsonToResources(jsonData: any[]): Tutorial[] {
      jsonData.forEach(element => this.tutorialsList.push(Tutorial.fromJson(element)));
      return this.tutorialsList;
    }
}
