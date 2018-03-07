import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppGlobal } from './util/app.global';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { MomosService } from './services/momos.service';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MomosComponent } from './momos/momos.component';
import { MomoComponent } from './momos/momo/momo.component';
import { MomoCreateComponent } from './momos/momo-create/momo-create.component';
import { MomoListComponent } from './momos/momo-list/momo-list.component';
import { MomoEditComponent } from './momos/momo-edit/momo-edit.component';
import { GalleryComponent } from './momos/gallery/gallery.component';
import { GraphicsComponent } from './momos/graphics/graphics.component';
import { MomoDetailComponent } from './momos/momo-detail/momo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MomosComponent,
    MomoComponent,
    MomoCreateComponent,
    MomoListComponent,
    MomoEditComponent,
    GalleryComponent,
    GraphicsComponent,
    MomoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppGlobal,
    AuthGuard,
    AuthService,
    MomosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
