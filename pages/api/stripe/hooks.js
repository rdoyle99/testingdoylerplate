const Stripe = require("stripe");
const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SKEY);

import { updateUserByQuery } from "@/lib/userFunctions";

const stripeHooks = async (req, res) => {
  const event = req.body;

  switch (event.type) {
    case "customer.subscription.deleted":
      const customer = event.data.customer;

      updateCustomerNotPaying(customer);
      break;
    case "invoice.payment_succeeded":
      const customerEmail = event.data.object.customer_email;
      const customerId = event.data.object.customer;
      updateCustomerPaying(customerEmail, customerId);

      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  res.json({ received: true });
};

async function updateCustomerNotPaying(customer) {
  try {
    updateUserByQuery(
      { stripe_id: customer },
      {
        paying: false,
      }
    );
  } catch (e) {
    console.log("error in not paying update");
  }
}

async function updateCustomerPaying(customerEmail, customerId) {
  updateUserByQuery(
    { email: customerEmail },
    {
      paying: true,
      stripe_id: customerId,
    }
  );
}

export default stripeHooks;
