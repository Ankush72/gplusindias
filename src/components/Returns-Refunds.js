import React from "react";

const ReturnsRefunds = () => {
  return (
    <div className="pt-20 pl-10 pr-10 mb-10 font-roboto">
      <h1 className="text-center font-bold text-3xl mt-10">Returns & Refund</h1>
      <div className="mt-5">
        <h1 className="font-bold text-base ">
          Order Cancellation, Returns and Refund Policy
        </h1>
        <p className="font-medium text-base mt-3">
          Refunds are subjected to full inspection of the returned product and
          is further approved by our internal team. We will provide free of cost
          replacement of the product within Seven (7) days after the product has
          been delivered, in case you have;
        </p>
      </div>

      <div className="mt-5">
        <div className="flex">
          <h1 className="font-medium">1.</h1>
          <p className="ml-2 font-medium text-base">
            Received item(s) in poor, damaged or mutilated condition or;
          </p>
        </div>
        <div className="flex">
          <h1 className="font-medium">2.</h1>
          <p className="ml-2 font-medium text-base ">
            Received an item(s) that is different from the item(s) that you have
            ordered with us;
          </p>
        </div>
      </div>

      <div className="mt-5">
        <li className="font-medium text-base mt-3">
          In order to get full refund, please return the item(s) to us in their
          original packing in unopened and undamaged condition, with all
          original tags/labels attached along with proof of purchase within
          Seven (7) days from date of receipt of items(s) at your end.
        </li>
        <li className="font-medium text-base mt-3">
          All costs associated with returning the item to us including return
          shipping charges and any taxes if applicable shall need to be taken
          care by you.
        </li>
        <li className="font-medium text-base mt-3">
          Gift cards, personalized products, sale, clearance and promotional
          items are not eligible for a return or exchange.
        </li>
        <li className="font-medium text-base mt-3">
          Original shipping cost will deducted from the refund amount.
        </li>

        <li className="font-medium text-base mt-3">
          If you wish to cancel an order that has been shipped but has not yet
          been delivered, please get in touch with our sales/support team and
          inform them at the earliest possible.
        </li>

        <li className="font-medium text-base mt-3">
          In case you have cancelled an order, which has already been handed
          over to the courier company from our end, they will still attempt
          delivery. Kindly do not accept the delivery of the order.
        </li>

        <li className="font-medium text-base mt-3">
          Once we receive the product(s) back and verify its
          packaging/condition, we will initiate refund procedure for your money
          within 3-4 working days.
        </li>
        <li className="font-medium text-base mt-3">
          The refund will be processed to the same account/method from which the
          payment was made. It may take 2-3 additional business days for the
          amount to reflect in your account.
        </li>
        <li className="font-medium text-base mt-3">
          Warranty: The products sold are covered under manufacturer’s warranty
          for 1 year. In case you find that the product is not working properly,
          after you have opened the box, we will replace or exchange the product
          to your satisfaction, without any questions asked within Seven (7)
          days. The faulty product/part has to returned back to us for
          replacement/repair. Transformers, Chargers and adapters are not
          included in warranty.
        </li>
      </div>

      <h1 className="font-semibold text-base mt-5 font-roboto">
        Important Note: At the time of taking the delivery of the items you
        ordered, please ensure that the product received is undamaged, is
        properly packed and acknowledge the same to the delivery person. In case
        the box looks damaged or tempered with, please do not take the delivery
        of the product. Call or email our sales support immediately.
        <br />
        Sales/ Support :- <span className="text-[#055DA7]">email</span> :{" "}
        <a className="text-[#055DA7]" href="mailto:support@gplusindia.com">
          support@gplusindia.com
        </a>{" "}
        or <span className="text-[#055DA7]">Toll free no</span> :{" "}
        <a className="text-[#055DA7]" href="tel:1800 12398 6666">
          1800 12398 6666
        </a>
      </h1>
    </div>
  );
};

export default ReturnsRefunds;
