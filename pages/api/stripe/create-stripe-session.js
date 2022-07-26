const Stripe = require("stripe");
const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SKEY);
import { getSession } from "next-auth/client";
import { withSentry } from "@sentry/nextjs";
import * as Sentry from "@sentry/node";

import { getUser } from "@/lib/userFunctions";

const billingPortalRoute = async (req, res) => {
  const id = req.headers.authorization;
  try {
    const user = await getSession({ req });
    const data = await getUser(user.id);

    const session = await stripe.billingPortal.sessions.create({
      customer: data.stripe_id,
    });

    const url = session.url;

    return res.status(200).json({ url });
  } catch (error) {
    Sentry.captureException(error);
    return res.status(500).json({ error });
  }
};

export default withSentry(billingPortalRoute);
