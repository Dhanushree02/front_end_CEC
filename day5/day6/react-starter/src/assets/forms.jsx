import React from "react";

export const Forms = () => {
    return (
        <form>
            <h2 style={{textAlign:"center"}}>Registration Form</h2>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" required /><br /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" required /><br /><br />
            <input type="submit" value="Register" />
        </form>
    );
};

export default Forms;
