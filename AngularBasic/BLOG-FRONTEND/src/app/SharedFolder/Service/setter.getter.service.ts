import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class SetterGetterService {
    name: string;
    setName(name: string) {
        this.name = name;
    }
    getName() {
        return this.name ? this.name : "default Name";
    }
}