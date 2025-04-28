import React from "react"

export default function Main (){
    const [ingredients, setIngredients] = React.useState([])
    const ingredientsList = ingredients.map(element => (
    <li key={element}>{element}</li>
        ))
    
    
    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get('ingredient')
        setIngredients(ingridient => [...ingridient, newIngredient])
              
    }
   
    return(
        <>
        <form onSubmit={handleSubmit} className="add-ingredient-form">
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