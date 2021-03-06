import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://powerful-ravine-08255.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])

    const handleDelete = (id,data) => {
        // data.status='pending'
        const confirmation = window.confirm('Dear Customer , do you want to delete this order?')
        if (confirmation) {
            const url = `https://powerful-ravine-08255.herokuapp.com/myOrders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire(
                            'WOW!',
                            'You Successfully deleted your Order!',
                            'Thank You'
                        )
                        const rest = orders.filter(order => order._id !== id);
                        setOrders(rest);
                    }

                    console.log(data)
                })
            console.log(id)
        }
    }



    return (
        <div className=''>
            <h2>Your total orders  {orders.length}</h2>
            <div className="row container">
                {
                    orders.map(order =>
                        <div className='col-md-5 m-4 p-4 border card-item'
                            key={order._id}>
                            <h6>Product Name{order.text}</h6>
                            <p>Phone:{order.number}</p>
                            {/* <p>Ordered By:{order.email}</p> */}
                            <p>Order state :{order.status}</p>
                            <button onClick={() => handleDelete(order._id)} className='btn btn-warning '>Delete Order</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;