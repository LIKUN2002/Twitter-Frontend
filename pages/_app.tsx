import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app'
import {Toaster} from "react-hot-toast"

const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
    <GoogleOAuthProvider clientId="998537835068-v3nmdkgqrbda1q6lhh3nnk6g03713665.apps.googleusercontent.com">
    <Component {...pageProps} />
    <Toaster/>
    </GoogleOAuthProvider>
    </div>
   
}
