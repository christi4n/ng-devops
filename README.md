# DevOps template for various projects

## History

- 2022-06-19 - 1.1.8: fix workflow
- 2022-06-01 - 1.1.7: add Trivy security scannerss
- 2022-05-31 - 1.1.6: add Kustomize
- 2022-05-31 - 1.1.5: fix incrementing for Docker image
- 2022-05-31 - 1.1.4: add kubernetes YAML files
- 2022-05-27 - 1.1.0: add GitHub actions with yamllint and Codeql
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

## Security

You can use Trivy. It is a vulnerability scanner for container images, file systems, git repositories and docker configuration files. Moreover, it is OpenSource.
## Kustomize

Use Kustomize to deploy the version you need. You have to create first the kustomization.yml file at the same level of your Kubernetes manifests. Then, launch the following command:

   kustomize build ./k8s > ./kustomization/manifests.yml

![ng-devops app](https://raw.githubusercontent.com/christi4n/ng-devops/master/assets/kustomize-k8s-manifest.png)

Depending on you kustomization.yml file and the manifest property you would like to override, the manifest.yml file will contain the correct manifest for the new deployment. In our example, we would like to change the image tag we are using for our deployment.

### Create an application with Argo CD

This application's task is to monitor our GitHub repo.

   argocd app create ng-devops --repo https://github.com/christi4n/ng-devops.git --revision kustomize --path ./kustomization --dest-server https://kubernetes.default.svc --dest-namespace ng-devops-ns

![ng-devops app](https://raw.githubusercontent.com/christi4n/ng-devops/master/assets/argo-cd-new-app.png)

The application is out of sync. Then, just sync it.

   argocd app sync ng-devops

Then, get the service ip.

   kubectl get services -n ng-devops-ns

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
