import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed." })
  if (!priceId) return res.status(400).json({ error: "Price not found." })

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cencelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: successUrl,
    cancel_url: cencelUrl,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  if (checkoutSession) return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })

  return res.status(400)
}