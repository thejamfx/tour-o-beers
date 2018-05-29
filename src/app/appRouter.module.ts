import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { BeerListComponent } from './beer/components/beerList/beerList.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { BeerDetailComponent } from './beer/components/beerDetail/beerDetail.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'beers/list', component: BeerListComponent },
    { path: 'beers/detail/:id', component: BeerDetailComponent }
];

interface CustomRoute extends Route {
    label: string
};
const routeDefinitions: CustomRoute[] = [
    { path: 'dashboard', label: 'Dashboard', component: DashboardComponent },
    { path: 'beers/list', label: 'Beers', component: BeerListComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule { }