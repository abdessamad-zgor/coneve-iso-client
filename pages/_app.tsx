import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CartProvider } from '../context/cart'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  let BaseLayout = router.pathname.split("/").includes("admin") ? (props: { children: React.ReactNode }) => <>{props.children}</> : Layout

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <CartProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </CartProvider>

    </SessionContextProvider>

  )
}
