import { Directive, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
    selector: '[lookup]',
    providers: []
})
export class LookupDirective implements OnInit {
    @Input() canCreate: boolean;
    @Input() collection: string;
    @Input() searchValue: string;

    @Output() lookupOptions: EventEmitter<any> = new EventEmitter<any>(true);

    constructor () {}

    public ngOnInit (): void {
        this.lookupOptions.emit([{
            uid: 'asdwqr',
            name: 'brewery name'
        }]);
    }
}
