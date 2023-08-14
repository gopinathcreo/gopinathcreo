import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { setPersistence as AUTH_SETTINGS } from "@angular/fire/auth";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from "@angular/fire/app";
import { provideAuth, getAuth, initializeAuth } from "@angular/fire/auth";
import { getStorage, provideStorage } from "@angular/fire/storage";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { env } from 'env';
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './httpconfig.interceptor';
import { useDeviceLanguage as USE_DEVICE_LANGUAGE } from "@angular/fire/auth";
import { DashboardModule } from './dashboard-module/dashboard-module.module';
// import { LibraryModule } from './library/library.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    // LibraryModule,
    provideFirebaseApp(() => initializeApp(env.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
    {
      provide: AUTH_SETTINGS,
      useValue: { appVerificationDisabledForTesting: true },
    },
    { provide: USE_DEVICE_LANGUAGE, useValue: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
