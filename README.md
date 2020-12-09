# vuex

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


mapState 
	1)single property
        mapState({msg:"StatePropertyName"})
	
    2) mutiple property
        ...mapState(["property1","property2"])

mapGatters
    1) single fuction
        ...mapGatters["getterFunctionName"]

mapActions
    1) call Actions
    ...mapActions(["mapActionMethodName", "ActionMethod"])    

mapMutation
    ...mapMutation(["mutationMethods,secondMethod"])