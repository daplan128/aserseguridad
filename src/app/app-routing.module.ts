import { Error404Component } from './shared/error404/error404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsComponent } from './pages/us/us.component';
import { ArticuleComponent } from './pages/blog/articule/articule.component';
import { BlogComponent } from './pages/blog/blog/blog.component';
import { SerPymeSstComponent } from './pages/products/ser-pyme-sst/ser-pyme-sst.component';
import { OutsourcingSstComponent } from './pages/products/outsourcing-sst/outsourcing-sst.component';
import { ProveedoresSstComponent } from './pages/products/proveedores-sst/proveedores-sst.component';
import { ConvencionesSstComponent } from './pages/products/convenciones-sst/convenciones-sst.component';
import { SuccessStoriesComponent } from './pages/success-stories/success-stories.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent ,
    data: { 
      title: 'Hola'
    } 
  },
  { path: 'quienes-somos', component: UsComponent  },
  { path: 'ser-pyme-sst', component: SerPymeSstComponent  },
  { path: 'outsourcing-sst', component: OutsourcingSstComponent  },
  { path: 'proveedores-sst', component: ProveedoresSstComponent  },
  { path: 'convenciones-sst', component: ConvencionesSstComponent  },
  { path: 'articulos', component: ArticuleComponent  },
  { path: 'blog', component: BlogComponent  },
  { path: 'casos-exito', component: SuccessStoriesComponent  },
  //{ path: '404', pathMatch:'full', component: Error404Component  },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
