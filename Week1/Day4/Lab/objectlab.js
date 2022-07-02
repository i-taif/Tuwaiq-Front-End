function recipe(name,auth,servings){
    this.name=name
    this.auth=auth
    this.steps=[]
    this.ingredients=[]
    this.servings=servings
    this.addSteps=function(step){
       this.steps.push(step)
    }
    this.addingredients=function(ingredient){
        this.ingredients.push(ingredient)
    }
    this.printreipe=function(){
        // forEach to print element
    }
}
const recipeone=new recipe("soup","taif",7)
recipeone.addSteps("first step")
const item1=new ingredients("name","grams",200,"notes")
recipeone.addingredients(item1)
const ingredients=function(name,units,quantity,notes){
    this.name=name
    this.units=units
    this.quantity=quantity
    this.notes=notes
}