import { addToBuilder } from "@/redux/features/pcBuilderSlice";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';

const ComponentCard = ({ product }) => {
    const dispatch = useDispatch();
    const { push } = useRouter();

    const handleAddToBuilder = () => {
        dispatch(addToBuilder(product));
        push('/pcbuilder')
    };
    return (
        <div className="card w-80 shadow-xl">
            <figure>
                <img src={product.image} alt={product.productName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <p>{product.category}</p>
                <p>{product.price} USD</p>
                <p>{product.status}</p>
                <p>Rating: {product.rating} Stars</p>
                <button onClick={handleAddToBuilder} className="btn btn-primary btn-block">Add To Builder</button>
            </div>
        </div>
    );
};

export default ComponentCard;