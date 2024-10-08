import { Container } from "react-bootstrap";
import PCard from "./CardProduct";
import { useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";

import { fetchAllProducts } from "../rtk/reducers/productSlice";
import { addToCart } from "../rtk/reducers/cardSlice";




export default function Products(){


        const productsData = useSelector((state) => state.products.products);

        const dispatch = useDispatch();
        
        useEffect(() => {
                dispatch(fetchAllProducts());
        }, [dispatch]);

    return(
        <>
        <Container className="my-products mt-3">
            <h1>Products</h1>
            <div className="products-container">
                    { Array.isArray(productsData) && 
                    productsData.map((product)=>{
                    return(
                        <PCard 
                        key={product.id}
                        img={product.image} 
                        title={product.title} 
                        description={`${product.description.slice(1,50)}...` }
                        price={product.price}
                        action = {()=>dispatch(addToCart(product))}/>
                    )
                })}
            </div>
        </Container>
        </>
    )
}