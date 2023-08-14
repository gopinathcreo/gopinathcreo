import { OnInit, NgZone, ElementRef, ViewEncapsulation, Inject, PLATFORM_ID } from "@angular/core";
import { Validators, FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { LoginService } from "./login.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { debounceTime, tap, switchMap, finalize, distinctUntilChanged } from "rxjs/operators";
import { ViewChild } from "@angular/core";
import { getAuth, RecaptchaVerifier } from "@angular/fire/auth";
import { ApplicationRef, Component, Optional } from "@angular/core";
import { signInWithPhoneNumber, signInWithEmailAndPassword } from "firebase/auth";
import { deepCopy } from "@angular-devkit/core/src/utils/object";
@Component({
  selector: "app-login",
  templateUrl: "./login-component.component.html",
  styleUrls: ["./login-component.component.scss"],
  encapsulation: ViewEncapsulation.None,

})
export class LoginComponent{
  signInCreds: FormGroup;
  is_browser = false
  signInemailCreds: FormGroup;
  otpCreds: FormGroup;
  countryList: any = [];
  inError: any;
  apiLoad: any;
  phonNumber: any;
  formSubmited: any;
  verificationId: any;
  showTemplate: any;
  otpformSubmited: any;
  emailFormSubmited: any = false;
  forgotPasswordSent = "";
  OTPError: any;
  resend: any;
  country: any;
  // @ViewChild("otp", { static: false }) otp: any;
  countrySearch: FormControl = new FormControl();
  constructor(
    public fb: FormBuilder,
  //   public loginService: LoginService,
  //   public router: Router,
  //   public _ngZone: NgZone,
  //   public route: ActivatedRoute,
  //   // public helperService: HelperService
  ) {
    this.showTemplate = 1;
    this.signInCreds = this.fb.group({
      phonno: new FormControl("", [Validators.required]),
      country: new FormControl(null, [Validators.required]),
    });
    this.signInemailCreds = this.fb.group({
      email: new FormControl(null, [
        Validators.email,
        Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$"),
      ]),
      password: new FormControl(null, [Validators.required]),
    });
    this.otpCreds = this.fb.group({
      otp: new FormControl("", [Validators.required, Validators.minLength(6)]),
    });
    // this.getServerResponse("");
    // this.countrySearch.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((data) => {
    //   this.getServerResponse(data);
    // });
  //   this.otpCreds.get('otp')?.valueChanges.subscribe(res=>{
  //     if((""+res).length>5){
  //       this.otpConform();
      }

  //   })
  // }
  // selectedOption($event: any) {
  //   this.country = $event.value;
  //   this.countrySearch.setValue("");
  //   this.signInCreds.get("country")?.setValue(this.country);
  // }
  // getServerResponse(event: any) {
  //   this.loginService.countryListAPI(this.helperService.getQueryparams("1", event, "", "")).subscribe(
  //     (result: any) => {
  //       this.countryList = result;
  //       const conty = this.countryList.find((x: any) => x.code === "IN");
  //       if (conty) {
  //         this.signInCreds.get("country")?.setValue(conty);
  //         this.country = conty;
  //       }
  //     },
  //     (error: any) => {}
  //   );
  // }
  // recaptchaVerifierset() {
  //   setTimeout(() => {
  //     try {
        
  //       const authTemp = getAuth();
  //       this.loginService.windowRef['recaptchaVerifier'] = new RecaptchaVerifier(
  //         "recaptcha-container",
  //         {
  //           size: "invisible",
  //           "expired-callback": () => {},
  //           callback: (response: any) => {},
  //         },
  //         authTemp
  //       );
  //       this.loginService?.windowRef?.recaptchaVerifier.render();
  //     } catch (e) {
  //       setTimeout(() => {
  //         this.recaptchaVerifierset();
  //       }, 1000);
  //     }
  //   }, 100);
  // }
  // selectEvent(item: any) {
  //   this.signInCreds.get("country")?.setValue(item);
  // }
  // emailForgotPassword() {
  //   const data = this.signInemailCreds.value;
  //   this.apiLoad = true;
  //   this.loginService.emailWithForgotPassword(data?.email).subscribe(
  //     (signInres: any) => {
  //       this.forgotPasswordSent = "" + deepCopy(data?.email);
  //       this.signInemailCreds.reset();
  //       this.apiLoad = false;
  //     },
  //     (error: any) => {
  //       this.apiLoad = false;
  //       if (error.code == "auth/unauthorized-continue-uri") {
  //         this.inError =
  //           "The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.";
  //       } else if (error.code == "auth/invalid-continue-uri") {
  //         this.inError = "The continue URL provided in the request is invalid.";
  //       } else if (error.code == "auth/missing-ios-bundle-id") {
  //         this.inError = "An iOS Bundle ID must be provided if an App Store ID is provided.";
  //       } else if (error.code == "auth/missing-continue-uri") {
  //         this.inError = "A continue URL must be provided in the request.";
  //       } else if (error.code == "auth/missing-android-pkg-name") {
  //         this.inError = "An Android package name must be provided if the Android app is required to be installed.";
  //       } else if (error.code == "auth/user-disabled") {
  //         this.inError = "The user corresponding to the given email has been disabled.";
  //       } else if (error.code == "auth/wrong-password") {
  //         this.inError =
  //           "Password is invalid for the given email, or the account corresponding to the email does not have a password set.";
  //       } else if (error.code == "auth/invalid-email") {
  //         this.inError = "Email address is not valid.";
  //       } else if (error.code == "auth/user-not-found") {
  //         this.inError = "There is no user corresponding to the given email.";
  //       } else {
  //         this.inError = "Error: " + error.code + " " + error.message;
  //       }
  //       setTimeout(() => {
  //         this.inError = null;
  //       }, 6000);
  //       console.error("error", error);
  //     }
  //   );
  // }
  // formloginEmailCreds() {
  //   this.emailFormSubmited = true;
  //   const data = this.signInemailCreds.value;
  //   if (this.signInemailCreds.invalid) {
  //     return;
  //   }
  //   this.apiLoad = true;
  //   const authTemp = getAuth();
  //   signInWithEmailAndPassword(authTemp, data?.email, data?.password)
  //     .then((result: any) => {
  //       const user = result.user;
  //       this.loginService.signIn(user, "IN").subscribe(
  //         (signInres) => {
  //           this.getUserDetail();
  //         },
  //         (error) => {
  //           setTimeout(() => {
  //             console.error("error", error);
  //             this.apiLoad = false;
  //             this.inError = "Error: " + error?.error?.detail[0];
  //             setTimeout(() => {
  //               this.OTPError = null;
  //               this.inError = null;
                // localStorage.clear();
                // window.location.reload();
  //             }, 9000);
  //           }, 100);
  //         }
  //       );
  //     })
  //     .catch((error) => {
  //       console.error("error", error.code);
  //       if (error.code == "auth/user-disabled") {
  //         this.inError = "The user corresponding to the given email has been disabled.";
  //       } else if (error.code == "auth/wrong-password") {
  //         this.inError =
  //           "Password is invalid for the given email, or the account corresponding to the email does not have a password set.";
  //       } else if (error.code == "auth/invalid-email") {
  //         this.inError = "Email address is not valid.";
  //       } else if (error.code == "auth/user-not-found") {
  //         this.inError = "There is no user corresponding to the given email.";
  //       } else {
  //         this.inError = error;
  //       }
  //       this.apiLoad = false;
  //       setTimeout(() => {
  //         this.inError = null;
  //       }, 6000);
  //     });
  // }
  // formloginPhoneCredsCreds() {
  //   this.formSubmited = true;
  //   if (this.signInCreds.invalid) {
  //     return;
  //   }
  //   this.apiLoad = true;
  //   const data = this.signInCreds.value;
  //   const appVerifier = this.loginService.windowRef['recaptchaVerifier'];
  //   this.phonNumber = data.country.dial_code + "" + data.phonno;
  //   const authTemp = getAuth();
  //   signInWithPhoneNumber(authTemp, this.phonNumber, appVerifier)
  //     .then((confirmationResult) => {
  //       this.showTemplate = 2;
  //       setTimeout(() => {
  //         try {
  //           const myTextBox = document.getElementById("otptype");
  //           myTextBox?.focus();
  //         } catch (e) {
  //           console.error("e", e);
  //         }
  //       }, 1000);
  //       this.resend = 60;
  //       const interval = setInterval(() => {
  //         this.resend--;
  //         if (!this.resend) {
  //           clearInterval(interval);
  //         }
  //       }, 1000);
  //       this.loginService.windowRef['confirmationResult']  = confirmationResult;
 
  //       this.apiLoad = false;
  //       this.verificationId = confirmationResult.verificationId;
  //     })
  //     .catch((error) => {
  //       this.apiLoad = false;
  //       this.inError = error;
  //       setTimeout(() => {
  //         this.inError = null;
  //       }, 3000);
  //     });
  // }
  // getUserDetail() {
  //   setTimeout(() => {
  //     this._ngZone.run(() => {
  //       this.router.navigate([""]);
  //       this.showTemplate = 3;
  //       this.apiLoad = false;
        //   this.loginService.getUserDetail().subscribe(
        //     (signInres: any) => {
        //       this.router.navigate([""]);
        //       this.showTemplate = 3;
        //       this.apiLoad = false;
        //     },
        //     (error) => {
        //       this.apiLoad = false;
        //       this.OTPError = "Error: " + error?.error?.detail;
        //       // setTimeout(() => {
        //       //   this.OTPError = null;
        //       //   localStorage.clear();
        //       //   window.location.reload();
        //       // }, 6000);
        //     }
        //   );
//       });
//     }, 50);
//   }
//   otpConform() {
//     this.otpformSubmited = true;
//     if (this.otpCreds.invalid) {
//       return;
//     }
//     this.formSubmited = false;
//     this.apiLoad = true;
//     const data = this.otpCreds.value;
//     this.loginService.windowRef['confirmationResult']
//       .confirm("" + this.otp.nativeElement.value)
//       .then((result: any) => {
//         const user = result.user;
//         this.loginService.signIn(user, "IN").subscribe(
//           (signInres) => {
//             this.getUserDetail();
//           },
//           (error) => {
//             setTimeout(() => {
//               this.apiLoad = false;
//               this.OTPError = "Error: " + error?.error?.detail;
//               setTimeout(() => {
//                 this.OTPError = null;
//                 localStorage.clear();
//                 window.location.reload();
//               }, 6000);
//             }, 100);
//           }
//         );
//       })
//       .catch((error: any) => {
//         this.inError = "Error during Signup: " + error.code + " " + error.message;
//         setTimeout(() => {
//           this.inError = null;
//         }, 6000);
//         this.apiLoad = false;
//       });
//   }
//   resendOtp() {
//     this.showTemplate = 1;
//     this.formSubmited = false;
//     this.signInCreds.get("country")?.setValue(this.countryList[0]);
//     this.loginService.windowRef['recaptchaVerifier'].render().then(function (widgetId: any) {});
//   }
//   ngOnInit(): void {
//     this.recaptchaVerifierset();
//   }
}
