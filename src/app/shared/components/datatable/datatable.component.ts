import { 
    Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild, AfterViewInit,
    ContentChildren, QueryList, ChangeDetectorRef
} from '@angular/core';
import { MatPaginator, MatTableDataSource, MatColumnDef, MatTable, MatHeaderRowDef } from '@angular/material';
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

    @ViewChild(MatPaginator) private paginator: MatPaginator;
    @ViewChild(MatTable) private table: MatTable<any>;

    @ContentChildren(MatColumnDef) columnDefinitions: QueryList<MatColumnDef>;

    public dataSource: MatTableDataSource<SourceElements>;
    public displayedColumns: string[];
    public selectionModel: SelectionModel<Beer>;

    constructor (private changeDetectionRef: ChangeDetectorRef, private datatableService: DatatableService) {}

    public ngOnInit () {
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
    public isAllSelected (): boolean {
        return this.selectionModel.selected.length === this.dataSource.data.length;
    }
    private initializeSelectionModel (): void {
        const initialSelection = [];
        this.selectionModel = new SelectionModel(this.isMultipleSelect, initialSelection);
    }
    private refreshDataSource (data: any): void {
        this.dataSource = this.datatableService.createDataSourceFromData(data, this.paginator);
    }
    private initializeDisplayedColumns (): void {
        const staticBeginningColumns = ['checked'];
        const staticEndingColumns = [];
        this.displayedColumns = [...staticBeginningColumns, ...this.dynamicColumns, ...staticEndingColumns];
    }
}
