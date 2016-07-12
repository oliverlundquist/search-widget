/* tslint:disable:no-unused-variable */

import { beforeEach, describe, expect, it, async, inject, addProviders } from '@angular/core/testing';
import { SearchComponent } from './';
import { ProductsService } from '../products.service';
import { TestHelper } from '../shared/test.helpers';

describe('Directive: Search', () => {
    let helper;

    // Add TestHelper to list of Providers
    beforeEach(() => addProviders([TestHelper]));

    // Inject and Instantiate TestHelper
    beforeEach(async(inject([TestHelper], (_helper) => { helper = _helper; })));

    it('Input Element Should Update When Query Property Is Set', () => {
        helper.component(SearchComponent).then(fixture => {
            const [component, element] = fixture;

            // input element value
            component.query = 'New Search Query';

            // trigger change detection
            component.detectChanges();

            // input element should have new value
            expect(element.querySelector('input').value).toBe('New Search Query');
        });
    });

});
