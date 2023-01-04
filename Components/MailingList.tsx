import React, { FormEvent, useState } from "react";
import * as z from "zod";

const emailSchema = z.string().email();

const MailingListForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState < unknown | string>("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    //validate email
    try {
      emailSchema.parse(email);
    } catch (err) {
        console.log(err)
      setError(err);
      return;
    }
    setEmail("");
    setError(null);
  };

    return (
<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center "> 
    
                   <p>Please join our mailing list below to be notified of any updates, and be one of the first to know when we go live!</p>

        <div className="form-control">
             
  <label className="input-group">
    <span>Email</span>
                <input type="text" placeholder="info@site.com" className="input input-bordered" />
                <button className="btn btn-primary">Submit</button>
  </label>
            </div>
    </div>
  );
};

export default MailingListForm;
