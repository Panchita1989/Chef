import React from "react"

export default function Main (){
    const [ingredients, setIngredients] = React.useState([])
    const ingredientsList = ingredients.map(element => (
    <li key={element}>{element}</li>
        ))
    
    
    function handleSubmit(formData){
        const newIngredient = formData.get('ingredient')
        setIngredients(ingridient => [...ingridient, newIngredient])
              
    }
   
    return(
        <>
        <form action={handleSubmit} className="add-ingredient-form">
            <input 
                type="text"
                placeholder="e.g. oregano" 
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button>Add ingredient</button>
        </form>
        {ingredientsList.length > 0 &&
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
             {ingredientsList.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
            </div>}
            </section>}
        </>
    )

    
}