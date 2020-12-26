import React from "react";
import "./Body.css";
import Button from "../Button/Button";
import { useGlobalContext } from "../../Context/context";
const Body = () => {
  const { hideMenuHandler } = useGlobalContext();
  return (
    <header className="body" onMouseOver={hideMenuHandler}>
      <section className="body__center">
        <article className="content">
          <h1 className="title">
            Payments infrastructure
            <br />
            for the internet
          </h1>
          <p className="text">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <Button value="Start now" />
        </article>
        <article className="img">
          <img
            src="https://react-projects-13-stripe-submenus.netlify.app/static/media/phone.58d7e3d6.svg"
            alt="Phone"
            className="img--style"
          />
        </article>
      </section>
    </header>
  );
};

export default Body;
