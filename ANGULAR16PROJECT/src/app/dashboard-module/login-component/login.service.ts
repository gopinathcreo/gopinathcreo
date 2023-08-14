import { Injectable, EventEmitter, Optional, Inject, PLATFORM_ID } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { provideAuth, getAuth,signOut, initializeAuth, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, setPersistence,browserSessionPersistence } from "@angular/fire/auth";
import { StorageInstances } from "@angular/fire/storage";
import { isPlatformBrowser } from "@angular/common";
import { initializeApp } from "firebase/app";
import { env } from "env";
import firebase from "firebase/compat/app";
import { country } from "src/app/countrycode";
import { HttpParams } from "@angular/common/http";
import { Auth,  AuthInstances, authState } from "@angular/fire/auth";
import { getStorage, ref, getDownloadURL } from "@angular/fire/storage";
import { FirebaseApp,   FirebaseApps } from "@angular/fire/app";
 
@Injectable({
  providedIn: "root",
})
export class LoginService {
  user: any;
  windowRef:any;
  is_browser=false;
  public lastUsedDashboardPath: any;
  userDetailrefreshed: EventEmitter<any> = new EventEmitter();
  constructor(
    private http: HttpClient,  
    private app: FirebaseApp,
    private auth: Auth,
    private storageInstances: StorageInstances,
    private apps: FirebaseApps, @Inject(PLATFORM_ID) private platformId: object,
    private authInstances: AuthInstances,
 
  ) {
    this.is_browser = isPlatformBrowser(platformId) ? true : false;
    if(this.is_browser){
    this.windowRef = window;
    setTimeout(() => {
      setTimeout(() => {
        const authTemp = getAuth();
        onAuthStateChanged(authTemp, (user) => {
          setPersistence(authTemp, browserSessionPersistence)
            .then((res:any) => {
              console.log("onAuthStateChanged",res)
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        });
      }, 3000);
    }, 500);
  }
  }
  countryListAPI(params?: HttpParams) {
    const sequence = new Observable((observer) => {
      const search = params?.get("search")?.toLowerCase();
      if (search) {
        const res = country.filter(
          (x: any) =>
            x.name.toLowerCase().startsWith(search) ||
            x.dial_code.toLowerCase().startsWith(search) ||
            x.code.toLowerCase().startsWith(search)
        );
        observer.next(res);
      } else {
        observer.next(country);
      }

      observer.complete();
    });
    return sequence;
  }
  signIn(user: any, countryid: any) {
    const sequence = new Observable((observer) => {
      this.user = user;
      const headers = new HttpHeaders({ "Content-Type": "application/json" });
      const options = { headers: headers };
      this.http
        .post(
          environment.login,
          {
            id_token: user.accessToken,
            mobile_country_code: countryid,
            // source: "WEB",
            user_type: "ADMIN",
          },
          options
        )
        .subscribe(
          (result: any) => {
            localStorage.setItem("selfi_dashboard_token", result?.token);
            localStorage.setItem("selfi_dashboard_user_id", result?.id);
            observer.next(result);
            observer.complete();
          },
          (error) => {
            observer.error(error);
            observer.complete();
          }
        );
    });
    return sequence;
  }
  getUserDetail() {
    const sequence = new Observable((observer) => {
      this.http.get(environment.user).subscribe(
        (result: any) => {
          if (result?.last_used_dashboard_path) {
            this.lastUsedDashboardPath = result?.last_used_dashboard_path;
          }
          localStorage.setItem("selfi_dashboard", JSON.stringify(result));
          observer.next(result);
          observer.complete();
        },
        (error) => {
          observer.error(error);
          observer.complete();
        }
      );
    });
    return sequence;
  }
  isLoggedIn() {
    if (localStorage.getItem("selfi_dashboard_token")) {
      return true;
    }
    return false;
  }
  userName() {
    const user = JSON.parse(localStorage.getItem(" selfi_dashboard_user") || "{}");
    if (user?.first_name) {
      return user.first_name;
    }
    if (user?.username) {
      return user.username;
    }
    return false;
  }
  getUser() {
    const user = JSON.parse(localStorage.getItem(" selfi_dashboard_user") || "{}");
    if (user) {
      return user;
    }
    return false;
  }
  emailWithForgotPassword(email: any) {
    const sequence = new Observable((observer) => {
      const authTemp = getAuth();
      sendPasswordResetEmail(authTemp, email)
        .then((res) => {
          observer.next(res);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
          observer.complete();
        });
    });
    return sequence;
  }
  signOut() {
    const sequence = new Observable((observer) => {
      const authTemp = getAuth();
      signOut(authTemp).then((res) => {
          localStorage.removeItem("selfi_dashboard_token");
          localStorage.removeItem(" selfi_dashboard_user_id");
          localStorage.removeItem(" selfi_dashboard_user");
          localStorage.clear();
          observer.next(res);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
          observer.complete();
        });
      setTimeout(() => {
        observer.next({});
        observer.complete();
      }, 5000);
    });
    return sequence;
  }
  imageGet(file: any) {
    const sequence = new Observable((observer) => {
      const authTemp = getAuth();
      const storage = getStorage();
      const pathReference = ref(storage, file);
      getDownloadURL(pathReference).then(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (error) => {
          observer.error(error);
          observer.complete();
        }
      );
    });
    return sequence;
  }
}
