import { stripe } from "@/lib/stripe";
import { DetailsContainer, ImageContainer, ProductContainer } from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";
import axios from 'axios'
import { useState } from "react";
import Head from "next/head";

type Product = {
  id: string
  name: string
  imageUrl: string
  description: string
  price: string
  priceId: string
}

type ProductProps = {
  product: Product
}

export default function Product({ product }: ProductProps) {

  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsSubmitting(true)
      const response = await axios.post('/api/checkout', { priceId: product.priceId })
      const { checkoutUrl } = response.data
      if (checkoutUrl) window.location.href = checkoutUrl
    } catch (error) {
      setIsSubmitting(false)
      alert('Falha ao redirecionar ao checkout..')
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt={''} />
        </ImageContainer>
        <DetailsContainer>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button disabled={isSubmitting} onClick={handleBuyProduct}>Comprar agora</button>
        </DetailsContainer>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{
      params: { id: 'prod_NbrJPiLdtzBWpS' }
    }],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id;
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price.unit_amount! / 100)

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formattedPrice,
        priceId: price.id,
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}