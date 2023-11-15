import type {Metadata} from 'next'
import {Raleway} from 'next/font/google'
import './globals.css';
import {ClerkProvider, SignedIn, SignedOut, SignIn} from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import React from "react";

const inter = Raleway({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Rent Car',
    description: 'Car rental app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={inter.className}>
            <SignedIn>
                <Navbar/>
                {children}
            </SignedIn>
            <SignedOut> <SignIn/></SignedOut>
            </body>
            </html>
        </ClerkProvider>
    )
}
