import Swal from "sweetalert2";


const AddProduct = () => {
    const handleProduct = e =>{
       e.preventDefault();
       const name = e.target.name.value;
          const chef = e.target.chef.value;
          const supplier = e.target.supplier.value;
          const taste =  e.target.taste.value;
          const category = e.target.category.value;
          const details = e.target.details.value;
          const  photo =  e.target.photo.value;
          const newProduct =  {name,chef,supplier,taste,category,details,photo,};
          console.log(newProduct);
          fetch('http://localhost:5000/food',{
               method:'POST',
               headers:{
                  'content-type':'application/json',
               },
               body:JSON.stringify(newProduct),
          })

          .then(res=> res.json())
          .then(data=>{
            console.log(data);
            if(data.insertedId){
               Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Product Added successfully',
                  showConfirmButton: false,
                  timer: 2000
                });
            }
          });
    }
    return (
        <div className=" mt-7 shadow-2xl shadow-gray-300 h-screen">
        <div className="mt-8   py-3 bg-[#F4F3F0]">
               <h1 className="text-4xl font-semibold font-serif text-orange-400 mb-4 text-center">  Add New Product</h1>
       <form
          onSubmit={handleProduct}
          >
     <div className="flex gap-4  mb-8 px-20">
        <h1 className="text-lg font-serif font-semibold">Name:</h1>
     <input type="text" placeholder="Product Name" name="name" className="input input-bordered input-accent w-full "  />
     <h1 className="text-lg font-serif font-semibold">Chef:</h1>
     <input type="text" placeholder="Chef Name" name="chef" className="input input-bordered input-accent w-full "  />
     </div>

     <div className="flex gap-4 mb-8 px-20">
        <h1 className="text-lg font-serif font-semibold">Supplier:</h1>
     <input type="text" placeholder="Supplier" name="supplier" className="input input-bordered input-accent w-full" />
     <h1 className="text-lg font-serif font-semibold">Taste:</h1>
     <input type="text" placeholder="Taste" name="taste" className="input input-bordered input-accent w-full "  />
     </div>

     <div className="flex gap-4 mb-8 px-20">
        <h1 className="text-lg font-serif font-semibold">Category:</h1>
     <input type="text" placeholder="Category" name="category" className="input input-bordered input-accent w-full "  />
     <h1 className="text-lg font-serif font-semibold">Details:</h1>
     <input type="text" placeholder="Details" name="details" className="input input-bordered input-accent w-full " />
     </div>
          <div className="pl-40">
          <h1 className="text-lg font-serif font-semibold mb-1">Photo:</h1>
          <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered input-secondary w-9/12" />
          </div>
          <div className="pl-40 pr-20">
          <input type="submit" placeholder="Type here"  className="input mb-5 mt-5 input-bordered input-accent w-full" />
          </div>
       </form>
        </div>
        </div>

    );
};

export default AddProduct;