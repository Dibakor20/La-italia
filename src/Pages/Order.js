import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { useForm } from "react-hook-form";
import './Order.css'
import { useHistory } from 'react-router';

const Order = () => {
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    alert('You Have Order Successfully')
    history.push('/home')
  };

    return (
        <>
         <Navbar/>

         <div className="container">
         <div class="booking-form">
                    <h3 className="font-family">Billing Details <span className="cash ml-3">(Cash on delivery)</span></h3>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6">
                        <div class="input-group">
                        <label for="">Name</label><br/>
                        <input className="inp-style" placeholder="Your Name" {...register("name", { required: true })} /><br/>
                        {errors.name && <span className="error">Name field is required</span>}
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div class="input-group">
                        <label for="">Email</label><br/>
                        <input className="inp-style" placeholder="Your Email" {...register("email", { required: true })} /><br/>
                        {errors.email && <span className="error">Email field is required</span>}
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div class="input-group">
                        <label for="">Mobile Number</label><br/>
                        <input className="inp-style" type="number" placeholder="Enter Your Mobile Number" {...register("number", { required: true })} /><br/>
                        {errors.number && <span className="error">Mobile number field is required</span>}
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div class="input-group">
                        <label for="">Street Adress</label>
                        <select className="inp-style selectType" {...register("city", { required: true })} ><br/>
                        {errors.city && <span className="error">Mobile number field is required</span>}
                        <option selected disabled>Select Your street Name</option>
                        <option>Zindabazar</option> 
                        <option>Bondhor</option> 
                        <option>Barudhkana</option> 
                        <option>Subanighat</option> 
                        <option>Rekabibazar</option> 
                        <option>Amberkana</option> 
                        <option>Mirabazar</option> 
                        <option>Shibgonj</option> 
                        <option>Chowhatta</option> 
                        <option>Lamabazar</option> 
                    </select>
                        </div>
                        </div>
                    </div>
                    <div class="input-group">
                        <label for="">Address</label><br/>
                        <input className="inp-style" placeholder="Flat suite or floor" {...register("adress", { required: true })} /><br/>
                        {errors.adress && <span className="error">Adress field is required</span>}
                        </div>
                       
                        {
                            <button  className='btn btn-primary d-block mx-auto my-2'>Place Order</button>
                        }
                       
                       </form>
                </div>
         </div>
        </>
    );
};

export default Order;