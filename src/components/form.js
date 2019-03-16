import React, { Component } from 'react';

class form extends Component {
    render() {
        return (
            <div className="just-test">
                <div className="coupon-form">

                    <div className="form-pair">
                        <input type="text" placeholder="Enter your coupon code"></input>
                        <input type="text" placeholder="Description"></input>
                    </div>


                    <div className="form-pair">
                        <input type="text" placeholder="Type"></input>
                        <input type="text" placeholder="Percentage"></input>
                    </div>


                    <div className="form-pair">
                        <input type="number" placeholder="Flat Rate"></input>
                        <input type="text" placeholder="Issued For"></input>
                    </div>


                    <div className="form-pair">
                        <input type="number" placeholder="Can be used"></input>
                        <input type="number" placeholder="Active"></input>
                    </div>


                    <div className="date-validation">
                        <div className="start-date">
                            Start Date<input type="date"></input>
                        </div>
                        <div className="end-date">
                            End Date<input type="date" placeholder=""></input>
                        </div>
                    </div>


                    <div className="form-pair">
                        <input type="number" placeholder="Must Buy"></input>
                        <input type="number" placeholder="gets Free"></input>
                    </div>


                    <div className="form-pair">
                        <input type="number" placeholder="Min Order"></input>
                        <input type="number" placeholder="Max Limit"></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default form;