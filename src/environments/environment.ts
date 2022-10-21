// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const apiBaseURL='http://localhost:9006/csaic/api/';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  sso: {

    //clientId:  "l9f92ABqHuKsbWuQfIVBIsrXKssa",
    clientId:  "OA71ZVEaAHq9cohn5sbsn2qrq_Aa",
    issuer:  "https://csacapi.hsoftcloud.com:9443/oauth2/token", 
    redirectUri: "https://csacangular.hsoftcloud.com/csac/login",    
    loginUrl:  "https://csacapi.hsoftcloud.com:9443/oauth2/authorize",    
    tokenEndpoint: "https://csacapi.hsoftcloud.com:9443/oauth2/token",
    userinfoEndpoint:  "https://csacapi.hsoftcloud.com:9443/oauth2/userinfo",
    requireHttps: false,
    requestAccessToken: true,
    disableAtHashCheck: false,
    showDebugInformation: true,
    scope: "openid profile identity ",
    responseType: "id_token token"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.