import { Injectable } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

type DataSource = {
    [index: string]: any;
};

@Injectable()
export class DatatableService {
    constructor () {}
    public createDataSourceFromData (data: any, paginator: MatPaginator): MatTableDataSource<any> {
        const dataSource = new MatTableDataSource<DataSource>(data);
        dataSource.paginator = paginator;
        return dataSource;
    }
}
