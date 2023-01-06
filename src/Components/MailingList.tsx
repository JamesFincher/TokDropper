import React, { FormEvent, useState } from "react";
import * as z from "zod";

const emailSchema = z.string().email();

const MailingListForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<unknown | string>("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    //validate email
    try {
      emailSchema.parse(email);
    } catch (err) {
      console.log(err);
      setError(err);
      return;
    }
    setEmail("");
    setError(null);
  };

  return (
    <div className="card rounded-box grid h-32 flex-grow place-items-center bg-base-300 ">
      <p>
        Please join our mailing list below to be notified of any updates, and be
        one of the first to know when we go live!
      </p>

      <div className="form-control">
        <label className="input-group">
          <span>Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            className="input-bordered input"
          />
          <button className="btn-primary btn">Submit</button>
        </label>
      </div>
    </div>
  );
};

export default MailingListForm;
