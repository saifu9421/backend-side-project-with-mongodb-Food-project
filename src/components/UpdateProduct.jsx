import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const food =  useLoaderData();

    const {_id,name,chef,supplier,taste,category,details,photo} = product;

  
    return (
        <div>
            <h2>Update:{name}</h2>
        </div>
    );
};

export default UpdateProduct;