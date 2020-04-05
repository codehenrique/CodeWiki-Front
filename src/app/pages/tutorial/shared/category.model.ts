import { BaseEntity } from 'src/app/shared/models/base-entity.model';
import { Subcategory } from './subcategory.model';
import { Tutorial } from './tutorial.model';

export class Category extends BaseEntity {
    constructor(
        public name?: string,
        public subcategories?: Subcategory[],
        public tutorials?: Tutorial[]
    ) { super(); }
}
