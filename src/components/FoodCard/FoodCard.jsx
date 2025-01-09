import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
    const { name, price, image, recipe, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [, refetch] = useCart();
    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image,
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //refetch cart to update the cart items count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login to add to the Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Menu items picture!" />
            </figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn bg-slate-100 border-amber-500 btn-outline border-0 border-b-4 mt-2">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;