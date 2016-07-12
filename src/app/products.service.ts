import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
    public mockName: string = 'hye';

    constructor() {
        this.mockName = 'hye2';
    }

}
