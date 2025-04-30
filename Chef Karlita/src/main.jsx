import React from "react"
import IngredientsList from "./components/ingredientsList"

export default function Main (){
    const [ingredients, setIngredients] = React.useState([])
       
    function handleSubmit(formData){
        const newIngredient = formData.get('ingredient')
        setIngredients(ingridient => [...ingridient, newIngredient])
              
    }
   
    return(
        <main>
        <form action={handleSubmit} className="add-ingredient-form">
            <input 
                type="text"
                placeholder="e.g. oregano" 
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button>Add ingredient</button>
        </form>
        {ingredients.length > 0 && <IngredientsList ingredients = {ingredients} />
        }
        </main>
    )

    
}