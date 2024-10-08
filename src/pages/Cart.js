import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, minusQuantity, clearAllCart , plusQuantity} from "../rtk/reducers/cardSlice";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function CardPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.card.cart);

    useEffect(() => {
        const dataFromStorage = localStorage.getItem('mycart');
        if (dataFromStorage) {
            try {
                const parsedData = JSON.parse(dataFromStorage);
                parsedData.forEach((item) => {
                    dispatch(addToCart(item));
                });
            } catch (error) {
                console.error(error);
            }
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('mycart', JSON.stringify(cartItems));
    }, [cartItems]);


    const submitAlert = () => {
        // const products = cartItems.map((item) => ({ id: item.id, quantity: item.quantity }));
        if(cartItems.length !== 0){

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, submit!'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire({
                    title:'Enter Your Data To Submit Order',
                    html:
                    
                        
                    
                    ` <div className="submit-form">         
                    <label for="fname">First Name:</label><br>
                    <input type="text" id="fname" name="fname" required><br>
                    <label for="lname">Last Name:</label><br>
                    <input type="text" id="lname" name="lname" required><br>
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" required><br>
                    <label for="phone">Phone:</label><br>
                    <input type="tel" id="phone" name="phone" required><br><br>
                    <label for="address">Address:</label><br>
                    <textarea id="address" name="address" rows="3" required></textarea><br>
                    <label for="city">City:</label><br>
                    <input type="text" id="city" name="city" required><br>
                    </div>`,
                    showCancelButton: true,
                    confirmButtonText: 'Submit',
                    cancelButtonText: 'Cancel',
                    cancelButtonColor: '#3085d6',
                    confirmButtonColor: '#4caf50',
                    closeOnConfirm: false,
                    closeOnCancel: false,
                preConfirm(){
                    const firstName = document.getElementById('fname').value;
                    const lastName = document.getElementById('lname').value;
                    const email = document.getElementById('email').value;
                    const phone = document.getElementById('phone').value;
                    const address = document.getElementById('address').value;
                    const city = document.getElementById('city').value;
                    if(firstName && lastName && email && phone && address && city){
                        return {firstName, lastName, email, phone, address, city};
                    }else{
                        Swal.fire({
                            title: 'Error',
                            text: 'Please fill all the required fields!',
                            icon: 'error',
                            confirmButtonText: 'Okay'
                        });
                    }
                }}
                ).then((result)=>{
                    if(result.isConfirmed){
                        axios.post('http://localhost:9000/orders',{
                            name: `${result.value.firstName} ${result.value.lastName}`,
                            email: result.value.email,
                            phone: result.value.phone,
                            address: result.value.address,
                            city: result.value.city,
                            totalPrice: cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0),
                            products: cartItems.map((item) => ({ item }))
                        })
                        Swal.fire({
                            title: 'Order Submitted Successfully!',
                            text: 'Your order has been submitted successfully!',
                            icon:'success',
                            confirmButtonText: 'Okay'
                        });
                        dispatch(clearAllCart());

                    }
                })
                }
            })}}


    return (
        <Container className="mt-3 my-cart">
            <div className="cart-header">
                <h1 className="p-2">Shopping Cart</h1>
                <h5>Total Price: {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}$</h5>
            </div>
            <div className="card-actions">
                <button className="btn btn-primary m-2" onClick={() => dispatch(clearAllCart())}>Remove All</button>
                <button className="btn btn-secondary ml-auto m-2" onClick={() => window.print()}>Print</button>
                <button className="btn btn-success ml-auto m-2" onClick={() => submitAlert()}>Submit</button>
            </div>
            <Table striped hover responsive className="rounded-bill mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity * item.price}</td>
                            <td className="row-col">
                                <button className="btn btn-danger mx-1" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                <button className="btn btn-success mx-1" onClick={() => dispatch(plusQuantity(item.id))}>+</button>
                                <button className="btn btn-secondary mx-1" onClick={() => dispatch(minusQuantity(item.id))}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
