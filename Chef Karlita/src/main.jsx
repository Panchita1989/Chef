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
        <section>{ingredientsList}</section>
        </>
    )

    
}