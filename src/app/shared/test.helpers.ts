import { Injectable } from '@angular/core';
import { TestComponentBuilder } from '@angular/core/testing';

@Injectable()
export class TestHelper {
    private builder: TestComponentBuilder;

    constructor(_builder: TestComponentBuilder) {
        this.builder = _builder;
    }

    component(component, providers) {
        return this.builder
            .overrideProviders(component, providers)
            .createAsync(component)
            .then(fixture => new Promise(resolve => resolve([fixture.componentInstance, fixture.nativeElement])));
    }
}
