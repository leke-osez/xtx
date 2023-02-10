import React from "react";
import "./payments.css";
import AddIcon from "@mui/icons-material/Add";
import MenuTitle from "../../Components/menuTitle/MenuTitle";
import { ArrowRight } from "@mui/icons-material";
import PaymentSummary from "../../Components/paymentSummary/PaymentSummary";
import PaymentsTable from "../../Components/paymentsTable/PaymentsTable";

const Payments = () => {
  return (
    <div className="payments">
      {/* PAYMENT HEADER */}
      <div className="payments__header">
        <h1 className="payments__title">Payments</h1>
        <div className="payments__button_create">
          <AddIcon />
          <p>Create Payment</p>
        </div>
      </div>

      {/* PAYMENT MENU */}
      <div className="payments__menu">
        <MenuTitle text="Transfers" />
        <MenuTitle text="Cash Transactions" />
        <MenuTitle text="Bill Payments" />
        <MenuTitle text="Cheques" />
      </div>

      <main className="payments__contents">
        <section className="payments__data">
          {/* PAYMENT SUMMARY */}
          <div className="payments__data-summary">
            <div className="payments__data-request">
              <ArrowRight />
              <p>Requests</p>
            </div>
            <div className="payments__data-summary_total">
              <PaymentSummary title={"All"} total={950} />
              <PaymentSummary title={"Approved"} total={947} color="green" />
              <PaymentSummary title={"In-Review"} total={1} />
              <PaymentSummary title={"In-Issue"} total={1} />
              <PaymentSummary title={"Draft"} total={1} />
            </div>
          </div>

          {/* PAYMENT TABLE */}
          <PaymentsTable />
        </section>

        {/* QUICK LINKS */}
        <section className="payments__quick-links_container">
          <h4>QUICK LINKS</h4>
          <hr />

          <div className="payments__activity-suggestion"></div>
          <div className="payments__quick-links"></div>
        </section>
      </main>
    </div>
  );
};

export default Payments;
