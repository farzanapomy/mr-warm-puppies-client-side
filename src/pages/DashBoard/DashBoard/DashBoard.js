import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../../Private/MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import './DashBoard.css'

import {
    Switch,
    Route
} from "react-router-dom";
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../../Private/AddProduct/AddProduct';
import ManageOrder from '../../Private/ManageOrder/ManageOrder';
import ManagerProduct from '../../Private/ManagerProduct/ManagerProduct';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const DashBoard = () => {
    const { path, url } = useRouteMatch();
    const { logOut, admin } = useAuth();


    return (
        <div className="container my-5">
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5 style={{ margin: "15px", padding: "15px", textDecoration: "" }}>User Dashboard</h5>
                            {!admin && <div>
                                <Link to='/home'>
                                    <button className="dashboard-menu mt-5 btn btn-warning px-5">Back</button>
                                </Link>
                                <Link to={`${url}`}>
                                    <li className="dashboard-menu mt-5">My Orders</li>
                                </Link>

                                <Link to={`${url}/payment`}>
                                    <li className="dashboard-menu mt-5">Payment</li>
                                </Link>

                                <Link to={`${url}/addReview`}>
                                    <li className="dashboard-menu mt-5">AddReview</li>
                                </Link>

                            </div>

                            }
                            {
                                admin &&
                                <div>
                                   <Link to='/home'>
                                    <button className="dashboard-menu mt-5 btn btn-warning px-5">Back</button>
                                </Link>
                                    <Link to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu mt-5">MakeAdmin</li>
                                    </Link>
                                    <Link to={`${url}/addProduct`}>
                                        <li className="dashboard-menu mt-5">AddProduct</li>
                                    </Link>
                                    <Link to={`${url}/managerOrder`}>
                                        <li className="dashboard-menu mt-5">Manage All Order</li>
                                    </Link>
                                    <Link to={`${url}/managerProduct`}>
                                        <li className="dashboard-menu mt-5">Manage All Product</li>
                                    </Link>
                                </div>
                            }

                            <button onClick={logOut} style={{ backgroundColor: "blue", color: 'white' }} className='btn px-4 m-3'>LogOut</button>
                        </div>
                    </div>
                    <div className="col-md-9 dashboard">
                        <Switch>
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>

                            <Route path={`${path}/addReview`}>
                                <AddReview></AddReview>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/managerOrder`}>
                                <ManageOrder></ManageOrder>
                            </AdminRoute>
                            <AdminRoute path={`${path}/managerProduct`}>
                                <ManagerProduct></ManagerProduct>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default DashBoard;