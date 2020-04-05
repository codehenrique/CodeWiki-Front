import { BaseEntity } from 'src/app/shared/models/base-entity.model';

export class Tutorial extends BaseEntity {
    constructor(
        public title?: string,
        public subject?: string,
        public content?: string,
        public observation?: string,
        public categoryId?: number,
        public subcategoryId?: number,
    ) { super(); }

    static fromJson = (jsonData: any): Tutorial => Object.assign(new Tutorial(), jsonData);
}
