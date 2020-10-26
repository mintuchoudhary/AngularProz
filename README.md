## Concepts
<b>Component</b> - Piece of code that represent a task. Basic block of logical unit of a process.
Command:
        `ng g component componentName`
        `ng g component moduleName/componentName`

`@Component({
   selector: 'app-users',
   templateUrl: './users.component.html',
   styleUrls: ['./users.component.css']
 })`

<b>Module</b> - Set of components to form a group of logical blocks. eg. Customer (module) - can have processes like Login, signup etc (component)
`ng g module moduleName`
tag-> @NgModule

<b>.ts Files</b> - This file binds the html and css file and give a name to the component (using selector tag)

<b>spec.ts</b> - Is used for testing purpose

<b>Interpolation</b> - Bind dynamic value/variable on html page

<b>Click event</b>
` <button (click)="testFunction()">Click Me</button>`

<b>Attribute vs Property</b>

`disable=false
<input type="text" #txtvalue disabled={{disabled}}> //this will remain disable`
`<input type="text" #txtvalue [disabled]=disabled> //this will get enabled`

<b>IF block</b>

` <ng-template #ifBlock>
     <h2>IF block</h2>
   </ng-template>
   <ng-template #elseBlock>
     <h2>ELSE block</h2>
   </ng-template>`

<b>SWICTH block</b>
` <div [ngSwitch]="color">
       <h2 *ngSwitchCase="'red'" style="color:red">red color</h2>
    </div>`

<b>For loop</b>
`<h4 *ngFor="let item of fruits">
     {{item}}
   </h4>`

# Angular9Learn SETUP
1. install node js which installs node and npm
2. To install angular CLI at global level : `npm install -g @angular/cli`
3.  Just below command and you are ready to GO
 
        `ng new my-first-project`
   
        `cd my-first-project`
   
        `ng serve`
4.  <b> package.json</b> - Keep the tracks of dependency 
5. <b> node_modules</b> - Consist of all the depedent modules that are imported
6. <b> src</b> - Main folder of the project 
7. <b> environments</b> - Used for different enviroment to handle PROD, UAT,DEV
8. <b> index.html</b> - Entry point to your application from html perspective
9. <b> main.ts</b> - Entry point from JS perspective.
10. <b> app </b> - By default the root module     
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
