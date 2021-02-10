import fs from "fs";



const ingredientJSON = JSON.parse(
  (fs.readFileSync("./src/datasources/ingredients.json") as unknown) as string,
);

ingredientJSON.ingredientsfromPantry.map(
    (ingredient: { id: string; name: string; expiry: string }) => {
      console.log(ingredient);
    },
  )


export function pickByExpiry(expiryDate: Date) {
    
}
