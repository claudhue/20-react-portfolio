import React from "react";

export default function Contact() {
    return (

        <div>
        <br/>
        <div class="card w-50 contact">
        <h5 class="card-header">Contact</h5>
        <div class="card-body">
            <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                />
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
        </div>

    )
}