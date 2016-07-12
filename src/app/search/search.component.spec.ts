/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, ElementRef } from '@angular/core';
import { SearchComponent } from './';
import { ProductsService } from '../products.service';
import { TestHelper } from '../shared/test.helpers';

import {
  beforeEach,
  describe, xdescribe,
  expect, it, xit,
  async, inject,
  addProviders,
  TestComponentBuilder,
  TestComponentRenderer,
  ComponentFixtureAutoDetect
} from '@angular/core/testing';

class MockTestService {
    public mockName: string = 'Mocked Service';
    constructor() {
        this.mockName = 'hey yo';
    }
}

describe('Directive: Search', () => {
    let builder;
    let helper;
    let directive = () => {
        return builder
            .overrideProviders(SearchComponent, [{ provide: ProductsService, useClass: MockTestService }])
            .createAsync(SearchComponent)
            .then(fixture => new Promise(resolve => resolve([fixture.componentInstance, fixture.nativeElement])));
    };
    beforeEach(() => addProviders([TestHelper]));
    beforeEach(async(inject([TestComponentBuilder, TestHelper], (_builder, _helper) => {
        builder = _builder;
        helper = _helper;
    })));

    it('Should Return Service', () => {
        // directive().then(fixture => {
        helper.component(SearchComponent, [{ provide: ProductsService, useClass: MockTestService }]).then(fixture => {
            const [component, element] = fixture;

            component.query = 'New Search Query';
            component.detectChanges(); // trigger change detection

            expect(element.querySelector('input').value).toBe('New Search Query');
        });
    });

});
