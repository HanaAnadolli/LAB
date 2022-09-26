import React,{Component} from 'react';
import {variables} from '../Variables.js';
import './HotelReservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com'; 

export class HotelReservation extends Component{
    render(){
        function sendEmail(e){
            e.preventDefault();

            emailjs.sendForm(
                'service_wjb42gp',
                'template_p2rp0mo',
                e.target,
                'o5lElSPul9HjKJFPG'
            ).then(res=>{
                console.log(res);
            }).catch(err=>console.log(err));
        }

        return(
            <div id="booking" class="section">
            <div class="section-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="booking-cta">
                                <h1>Make your reservation</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam at</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-offset-1">
                            <div class="booking-form">
                                <form onSubmit={sendEmail}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input class="form-control" type="text" name="name"/>
                                                <span class="form-label">Name</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input class="form-control" type="email" name="email"/>
                                                <span class="form-label">Email</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input class="form-control" type="tel" name="phone"/>
                                                <span class="form-label">Phone</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="form-group">
                                                <span class="form-label">Rooms</span>
                                                <select class="form-control" name="rooms">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span class="select-arrow"></span>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="form-group">
                                                <span class="form-label">Guests</span>
                                                <select class="form-control" name="guests">
                                                    <option>1 Person</option>
                                                    <option>2 People</option>
                                                    <option>3 People</option>
                                                </select>
                                                <span class="select-arrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input class="form-control" type="date" name="checkIn" required/>
                                                <span class="form-label">Check In</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input class="form-control" type="date" name="checkOut" required/>
                                                <span class="form-label">Check Out</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-btn">
                                        <input type="submit" value="Book Now" class="submit-btn"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
      
)
}
}
export default HotelReservation