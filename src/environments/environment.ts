// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//
import { FirebaseAppConfig } from "@angular/fire";

export const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDNBC67WKxs4miuKi-xz4QirICxKY1BR7w",
  authDomain: "pubmed-6c453.firebaseapp.com",
  databaseURL: "https://pubmed-6c453.firebaseio.com",
  projectId: "pubmed-6c453",
  storageBucket: "",
  messagingSenderId: "40696183324"
};

export const environment = {
  epmcUrl: "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
  ncbiUrl: "https://eutils.ncbi.nlm.nih.gov/entrez/eutils",
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
