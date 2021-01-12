import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { EnvironnementComponent } from './environnement/environnement.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'solutions', component: SolutionsComponent},
  { path: 'valeurs', component: ValeursComponent},
  { path: 'environnement', component: EnvironnementComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
