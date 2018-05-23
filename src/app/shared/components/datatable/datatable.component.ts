import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
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
export class DatatableComponent implements OnChanges {
    @Input() public source: MatTableDataSource<SourceElements>;

    @ViewChild(MatPaginator) private paginator: MatPaginator;

    public dataSource: MatTableDataSource<SourceElements>;
    public displayedColumns = ['checked', 'id', 'name', 'brewery'];

    constructor (private datatableService: DatatableService) {}
    public ngOnChanges (changes: SimpleChanges) {
        if (changes.source.currentValue) {
            this.refreshDataSource(changes.source.currentValue);
        }
    }
    private refreshDataSource (data: any) {
        this.dataSource = this.datatableService.createDataSourceFromData(data, this.paginator);
        console.log(this.dataSource);
    }
}
