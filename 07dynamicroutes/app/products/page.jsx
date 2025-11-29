// const Products = async (props) => {

//     const products = await props.searchParams;
//     console.log(products);
    
//     return(
//         <div>
//             Products
//         </div>
//     )
// }

// export default Products

const Products = async ({searchParams}) => {

    const searchParam = await searchParams;
    
    const catagory = searchParam?.catagory || "all";
    const sort = searchParam?.sort || "default";
    const page = searchParam?.page || 1;
    return(
        <div>
        catagory {catagory} sorted by {sort} page {page}
        </div>
    )
}

export default Products