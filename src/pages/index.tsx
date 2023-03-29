import { useRef } from 'react';
import { GetStaticProps } from 'next';

import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

import { HomeContainer, LeftControlContainer, Product, ProductContainer, RightControlContainer } from "@/styles/pages/home";
import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';

import chevronLeftImg from '../assets/chevron-left.svg'
import chevronRightImg from '../assets/chevron-right.svg'

type Product = {
  id: string
  name: string
  imageUrl: string
  price: string
}

type HomeProps = {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function handleScrollLeft() {
    if (carouselRef?.current) carouselRef.current.scrollLeft -= 700
  }

  function handleScrollRight() {
    if (carouselRef?.current) carouselRef.current.scrollLeft += 700
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer>
        <LeftControlContainer onClick={handleScrollLeft}>
          <Image src={chevronLeftImg} width={48} height={48} alt="chevron left" />
        </LeftControlContainer>
        <RightControlContainer>
          <Image src={chevronRightImg} width={48} height={48} alt="chevron right" onClick={handleScrollRight} />
        </RightControlContainer>
        <ProductContainer ref={carouselRef}>
          {
            products.map((product: Product) => (
              <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
                <Product>
                  <Image src={product.imageUrl} width={520} height={480} alt={''} />
                  <footer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </footer>
                </Product>
              </Link>
            ))
          }
        </ProductContainer>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount! / 100)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedPrice,
    }
  })
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
