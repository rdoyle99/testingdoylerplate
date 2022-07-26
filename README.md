To Change:

- Email from for Auth links in .env
- Remove unused Auth providers
- Spin up a new Mongo cluster and change MONGODB_URI in .env
- Spin up a new Stripe cluster and change PKEY, SKEY, and PRICE in .env
- Set stripe webhook endpoint so we can update users to paying
- Remove sentry error button from index.js and wrap around API routes following the stripe checkout example
- change Next SEO

  Optional

- Add Auth Providers

--toast on payment, webhook to save
