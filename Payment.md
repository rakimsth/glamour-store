Step to work on Stripe Payment for orders

1. open account at stripe.com
2. go to dashboard.stripe.com
3. Turn on Test mode > Click on developer Section > API KEYS
   a. Copy Publishable and Secret Key
4. Create a checkout session intent following the document link (https://stripe.com/docs/checkout/quickstart)
5. Update you APP.js page to use the stripe functions to create checkout session intent
6. Create the payment line items in the checkout fetch to fetch the session intent
7. Send the payment line items to backend to replace the line_items
8. Dont forget to convert the USD Dollar to cents in generatePaymentLineItems in Checkout.jsx page
9. Create the useEffect hook to generate the checkout session url
10. Store that checkout in the checkoutUrl State
11. On click the submit button, redirect the user to the checkout url using window.location.replace
    ==========Stripe Payment Completed=========
12. Start tracking the payment in the backend to update the order status

## Workflow that we are gonna implement

### On Frontend side

1. Create an order in checkout page
2. Clicking on checkout button should trigger stripe checkout option
3. Successful payment should redirect to success page
4. Failed payment should redirect to failed page

### On backend side

Two options:

1. Create a payment intent for checkout; checkout elements
2. Create a checkout session for payments; checkout url (stripe) {we will follow this route}
