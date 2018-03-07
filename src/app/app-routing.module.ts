import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

import { MomosComponent } from './momos/momos.component';
import { MomoComponent } from './momos/momo/momo.component';
import { MomoCreateComponent } from './momos/momo-create/momo-create.component';
import { MomoListComponent } from './momos/momo-list/momo-list.component';
import { MomoEditComponent } from './momos/momo-edit/momo-edit.component';
import { GalleryComponent } from './momos/gallery/gallery.component';
import { GraphicsComponent } from './momos/graphics/graphics.component';
import { MomoDetailComponent } from './momos/momo-detail/momo-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  }, {
    path: 'admin',
    component: MomosComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'momos',
        component: MomoListComponent,
        children: [
          {
            path: 'create',
            component: MomoCreateComponent
          }, {
            path: ':id',
            component: MomoDetailComponent
          }, {
            path: ':id/edit',
            component: MomoEditComponent
          }
        ]
      }, {
        path: 'gallery',
        component: GalleryComponent
      }, {
        path: 'graphics',
        component: GraphicsComponent
      }
    ]
  }, {
    path: 'login',
    component: SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
