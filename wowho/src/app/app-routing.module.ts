import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './views/main-view/main-view.component';
import { SearchViewComponent } from './views/search-view/search-view.component';

const routes: Routes = [
  { path: 'search', component: SearchViewComponent },
  { path: 'home', component: MainViewComponent },
  { path: '**', component: MainViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
