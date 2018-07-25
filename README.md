# Introduction

This application is a fork of [angular-electron](https://github.com/maximegris/angular-electron) with [ngx-admin](https://github.com/akveo/ngx-admin) transplanted into it.

Currently runs with:

- Angular v6.0.5
- Electron v2.0.3
- Electron Builder v20.13.4
- Nebular v2.0.0-rc.9

Because this is an Angular + Electron app, you can:

- Run your app in a local development environment with Electron & Hot reload
- Run your app in a production environment
- Package your app into an executable file for Linux, Windows & Mac

## Getting Started

Install dependencies with npm :

``` bash
npm install
```

If you want to generate Angular components with Angular-cli , you **MUST** install `@angular/cli` in npm global context.  
Please follow [Angular-cli documentation](https://github.com/angular/angular-cli) if you had installed a previous version of `angular-cli`.

``` bash
npm install -g @angular/cli
```

## Browser mode

Maybe you want to execute the application in the browser with hot reload ? You can do it with `npm run ng:serve:web`.  
Note that you can't use Electron or NodeJS native libraries in this case. Please check `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.

## To build for development

``` bash
npm start
```

Voila! You can use your Angular + Electron app in a local development environment with hot reload !

The application code is managed by `main.ts`. The app runs with a simple Angular App on [localhost:4200](http://localhost:4200) and an Electron window.  

You can deactivate "Developer Tools" by commenting `win.webContents.openDevTools();` in `main.ts`.

## Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve:web`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

## TODO

Check the extra commands gained from ngx-admin work, and add them to this table.

**This application is optimised. Only /dist folder and node dependencies are included in the executable.**
