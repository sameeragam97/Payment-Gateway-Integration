// This is your test secret API key.
const stripe = require('stripe')('sk_test_51Nrb2nSJ7A0M1hjetht32drkD3rCYuxMAmSfi8cQ8XiB1ffPiFJ46TEctN8VdRBUH2Wua0XuC85hl8nZSglmilf900IvmNwTW4');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1NsMQKSJ7A0M1hjeweVFSFhK',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));