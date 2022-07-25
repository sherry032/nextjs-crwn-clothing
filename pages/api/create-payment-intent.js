// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  if(req.method !== "POST") { 
    res.status(422).json({message: 'Invalid request type', status:"error", title:"failed"})
    return
  }
  let paymentIntent

  try {
    const { amount } = req.body;
    paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    
  } catch (error) {
    console.log({ error });
    res.status(500).json({message: 'payment failed', status:"error", title:"failed"})
    return
  }
  res.status(201).json({ body:paymentIntent, status:"success", title:"Success" });
    return
}

