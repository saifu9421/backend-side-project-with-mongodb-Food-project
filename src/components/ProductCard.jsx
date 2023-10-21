import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductCard = ({product}) => {
    const {_id,name,chef,supplier,taste,category,details,photo} = product;

     const handleDelete = _id =>{
      console.log(_id);
    
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )


        fetch(`http://localhost:5000/food/${_id}`,{
            method:"DELETE",
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                     Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
            }
        })
        }
      })


     
    
     }

    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={photo}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block text-lg font-serif  antialiased font-semibold leading-relaxed text-blue-gray-900">
        {name}
      </p>
      <p className="block font-serif  text-xl  antialiased font-semibold leading-relaxed text-blue-gray-900">
        {supplier}
      </p>
    </div>
    <p className="block font-serif text-sm antialiased font-semibold leading-normal text-gray-700 opacity-75">
      {details}
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link to={`updateProduct/${_id}`}>
    <button 
      className="block w-full text-amber-400 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Update
    </button>
    
    </Link>
    <button
      onClick={()=>handleDelete(_id)}
      className="block w-full btn  btn-accent btn-outline select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Delete
    </button>
  </div>
</div>
        </div>
    );
};

export default ProductCard;