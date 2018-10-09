import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
    {path: '', component: HomeComponent},


]

@NgModule({
    imports: [
      CommonModule, RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
  })
  export class AppRoutingModule {}