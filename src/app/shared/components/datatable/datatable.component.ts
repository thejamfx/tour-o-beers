import { 
    Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild, AfterViewInit,
    ContentChildren, QueryList, ChangeDetectorRef, Output, EventEmitter
} from '@angular/core';
import { MatPaginator, MatTableDataSource, MatColumnDef, MatTable, MatHeaderRowDef, PageEvent } from '@angular/material';
import { DatatableService } from '../../services/datatableService.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Beer } from '../../../beer/beer.types';


type SourceElements = {
    [elementName: string]: any
};

@Component({
    selector: 'data-table',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css'],
    providers: [DatatableService]
})
export class DatatableComponent implements OnInit, OnChanges, AfterViewInit {
    @Input() public source: MatTableDataSource<SourceElements>;
    @Input() public dynamicColumns: string[];
    @Input() private isMultipleSelect: boolean;

    @Output() public selectedItems: EventEmitter<any> = new EventEmitter();

    @ViewChild(MatPaginator) private paginator: MatPaginator;
    @ViewChild(MatTable) private table: MatTable<any>;

    @ContentChildren(MatColumnDef) columnDefinitions: QueryList<MatColumnDef>;

    public dataSource: MatTableDataSource<SourceElements>;
    public displayedColumns: string[];
    public selectionModel: SelectionModel<Beer>;
    public pageEvent: PageEvent;
    public showSpinner: boolean;

    constructor (private changeDetectionRef: ChangeDetectorRef, private datatableService: DatatableService) {}

    public ngOnInit () {
        this.showSpinner = true;
        this.initializeSelectionModel();
    }
    public ngAfterViewInit () {
        this.columnDefinitions.forEach((columnDefinition) => {
            this.table.addColumnDef(columnDefinition);
        });
        setTimeout(() => this.initializeDisplayedColumns());
    }
    public ngOnChanges (changes: SimpleChanges) {
        if (changes.source.currentValue) {
            this.refreshDataSource(changes.source.currentValue);
        }
    }
    public isChecked (): boolean {
        return this.selectionModel.hasValue() && this.isAllSelected();
    }
    public isIndeterminate (): boolean {
        return this.selectionModel.hasValue() && !this.isAllSelected();
    }
    private isAllSelected (): boolean {
        return this.selectionModel.selected.length === this.dataSource.data.length;
    }
    private initializeSelectionModel (): void {
        const initialSelection = [];
        this.selectionModel = new SelectionModel(this.isMultipleSelect, initialSelection);
    }
    private refreshDataSource (data: any[] = []): void {
        this.showSpinner = false;
        this.dataSource = this.datatableService.createDataSourceFromData(data, this.paginator);
    }
    private initializeDisplayedColumns (): void {
        const staticBeginningColumns = ['checked'];
        const staticEndingColumns = [];
        this.displayedColumns = [...staticBeginningColumns, ...this.dynamicColumns, ...staticEndingColumns];
    }
}
