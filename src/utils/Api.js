export const fetchProduct = async () => {
    try {
        const response = await fetch("/product.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchProductById = async (id) => {
  try {
    const response = await fetch("/product.json");
    const data = await response.json();
    return data.find((product) => product.id === parseInt(id)) || null;
  } catch (error) {
    console.log(error);
    return null;
  }
  
};