# Pokemon Trainer

## Table of Contents
1. [Introduction](#intro)
2. [Feature](#feats)
3. [Folders] (#folder)
4. [Technologies](#tech)
5. [Usage](#use)
6. [Authors](#aut)
7. [Sources](#sou)

<a name="intro"></a>
## 1. Introduction 
Pokemon trainer is a web application created with Angular Framework. This application allows you to sign in with your name. Then you can browse all of the pokemons and add them to your collection. From the collection you can also delete a pokemon. 


<a name="feats"></a>
## 2. Features
* Add pokemon to your collection
* Authentication
* Store users collection and delete when needed

<a name="folder"></a>
## 3. Folders
└───src
    │   favicon.ico
    │   index.html
    │   main.ts
    │   styles.css
    │
    ├───app
    │   │   app-routing.module.ts
    │   │   app.component.css
    │   │   app.component.html
    │   │   app.component.spec.ts
    │   │   app.component.ts
    │   │   app.module.ts
    │   │
    │   ├───components
    │   │   ├───card-item
    │   │   │       card-item.component.css
    │   │   │       card-item.component.html
    │   │   │       card-item.component.spec.ts
    │   │   │       card-item.component.ts
    │   │   │
    │   │   ├───login-form
    │   │   │       login-form.component.css
    │   │   │       login-form.component.html
    │   │   │       login-form.component.spec.ts
    │   │   │       login-form.component.ts
    │   │   │
    │   │   ├───navbar
    │   │   │       navbar.component.css
    │   │   │       navbar.component.html
    │   │   │       navbar.component.spec.ts
    │   │   │       navbar.component.ts
    │   │   │
    │   │   └───pokemon-item
    │   │           pokemon-item.component.css
    │   │           pokemon-item.component.html
    │   │           pokemon-item.component.spec.ts
    │   │           pokemon-item.component.ts
    │   │
    │   ├───guards
    │   │       auth.guard.spec.ts
    │   │       auth.guard.ts
    │   │       logged.guard.spec.ts
    │   │       logged.guard.ts
    │   │
    │   ├───models
    │   │       pokemon.model.ts
    │   │       user.model.ts
    │   │
    │   ├───pages
    │   │   ├───catalogue
    │   │   │       catalogue.page.css
    │   │   │       catalogue.page.html
    │   │   │       catalogue.page.spec.ts
    │   │   │       catalogue.page.ts
    │   │   │
    │   │   ├───login
    │   │   │       login.page.css
    │   │   │       login.page.html
    │   │   │       login.page.spec.ts
    │   │   │       login.page.ts
    │   │   │
    │   │   └───trainer
    │   │           trainer.page.css
    │   │           trainer.page.html
    │   │           trainer.page.spec.ts
    │   │           trainer.page.ts
    │   │
    │   ├───services
    │   │       cath-em-all.service.spec.ts
    │   │       cath-em-all.service.ts
    │   │       fetch-data.service.spec.ts
    │   │       fetch-data.service.ts
    │   │       login.service.spec.ts
    │   │       login.service.ts
    │   │       user.service.spec.ts
    │   │       user.service.ts
    │   │
    │   └───utils
    │           storage-keys.enum.ts
    │           storage.util.ts
    │
    ├───assets
            .gitkeep
            bkground.gif
            delete.png
            login-bg.png
            pokeball.png
            Pokemon Classic.ttf
            Pokemon _Solid.ttf
    

<a name="tech"></a>
## 4. Technologies 
* Angular
* Typescript
* HTML/CSS
* Glitch
* Netlify

<a name="use"></a>
## 5. Usage

The application is deployed [here](https://pokemontr41ner.netlify.app)

<a name="aut"></a>
## 6. Authors
[@Adalmiina](https://github.com/Adalmiinas)
[@Marco](https://github.com/DeferredMonk)

<a name="sou"></a>
## 7. Sources
Project was an assignment done during education program created by Noroff Education