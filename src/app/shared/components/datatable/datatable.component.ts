import { Component, Input, OnChanges, SimpleChanges, ViewChild, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatColumnDef, MatTable, MatHeaderRowDef } from '@angular/material';
import { DatatableService } from '../../services/datatableService.service';

type SourceElements = {
    [elementName: string]: any
};

@Component({
    selector: 'data-table',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css'],
    providers: [DatatableService]
})
export class DatatableComponent implements OnChanges, AfterViewInit {
    @Input() public source: MatTableDataSource<SourceElements>;
    @Input() public dynamicColumns: string[];

    @ViewChild(MatPaginator) private paginator: MatPaginator;
    @ViewChild(MatTable) private table: MatTable<any>;

    @ContentChildren(MatColumnDef) columnDefinitions: QueryList<MatColumnDef>;

    public dataSource: MatTableDataSource<SourceElements>;
    public displayedColumns = [];

    constructor (private datatableService: DatatableService) {}
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
    private refreshDataSource (data: any) {
        this.dataSource = this.datatableService.createDataSourceFromData(data, this.paginator);
    }
    private initializeDisplayedColumns (): void {
        const staticBeginningColumns = ['checked'];
        const staticEndingColumns = [];
        this.displayedColumns = [...staticBeginningColumns, ...this.dynamicColumns, ...staticEndingColumns];
    }
}
