const Stripe = require("stripe");
const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SKEY);
import { withSentry } from "@sentry/nextjs";

const checkoutRoute = async (req, res) => {
  console.log(req.body);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: req.body,
      line_items: [
        {
          price: "price_1Hr49WIXI4iE1NezNDo37bM1",
          quantity: 1,
        },
      ],
      mode: "subscription",
      allow_promotion_codes: true,

      success_url: `https://${process.env.BASE_URL}/`,
      cancel_url: `https://${process.env.BASE_URL}/`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error });
  }
};

export default withSentry(checkoutRoute);
