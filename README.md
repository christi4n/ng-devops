# DevOps template for various projects

## History

- 2022-05-26 - 1.0.1: remove Protractor and add Cypress.io
- 2021-01-18 - 1.0.0: first release

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## How it looks

![ng-devops app](https://raw.githubusercontent.com/christi4n/ng-devops/master/assets/ng-devops-screen-1.png)
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).
You can also run Cypress in open-mode with `ng run ng-devops:cypress-open`

### Run tests in CI

You should register the project in Cypress.io dashboard. Then, proceed by adding a key in your cypress.json and add an environment variable for the command line.

    export CYPRESS_KEY=myverylongkey
    npx cypress run --record --key $CYPRESS_KEY

## YAML linter

You can check manually the syntax of your YAML files:

    ./node_modules/.bin/yamllint -c ./yamllint/config/conf.yml ./.github/workflows/codeql-analysis.yml

- ./yamllint/config/conf.yml: yamllint configuration path
- ./.github/workflows/codeql-analysis.yml: GitHub workflow for yaml linter

![ng-devops app](https://raw.githubusercontent.com/christi4n/ng-devops/master/assets/ng-devops-screen-2.png)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
