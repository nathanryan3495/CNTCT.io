import React from "react";

const ContactForm = () => {
    return (
        <>
            <form className="form" action="https://formspree.io/f/xaylazjw" method="POST">
                <input type="hidden" name="id" value="123456"/>

                <div className="form-group">
                    <label className="form-group__label">Name</label>
                    <input className="form-group__input" type="text" name="name"/>
                </div>

                <div className="form-group">
                    <label className="form-group__label">Email</label>
                    <input className="form-group__input" type="text" name="email"/>
                </div>

                <div className="form-group">
                    <label className="form-group__label">Date of birth</label>
                    <input className="form-group__input" type="text" name="dob"/>
                </div>

                <div className="form-group">
                    <label className="form-group__label">Telephone number</label>
                    <input className="form-group__input" type="text" name="telephone"/>
                </div>

                <div className="form-group">
                    <label className="form-group__label">Address</label>
                    <input className="form-group__input" type="text" name="address"/>
                </div>

                <div className="form-group">
                    <label className="form-group__label">Number of years experience</label>
                    <input className="form-group__input" type="text" name="years"/>
                </div>

                <div className="form-group">
                    <label className="form-group__label">Favourite web development topics</label>
                    <input className="form-group__checkbox" type="checkbox" name="faves[]"/> Hex colours<br />
                    <input className="form-group__checkbox" type="checkbox" name="faves[]"/> Accessibility<br />
                    <input className="form-group__checkbox" type="checkbox" name="faves[]"/> Node modules<br />
                    <input className="form-group__checkbox" type="checkbox" name="faves[]"/> Javascript frameworks<br />
                    <input className="form-group__checkbox" type="checkbox" name="faves[]"/> BBQ<br />
                </div>
                
                <div className="form-group">
                    <label className="form-group__label">Why I want to work at Etch</label>
                    <textarea name="why" className="form-group__input"></textarea>
                </div>

                <button>I want to work at Etch</button>
            </form>
        </>
    );
};

export default ContactForm;