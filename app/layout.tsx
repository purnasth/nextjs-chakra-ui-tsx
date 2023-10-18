"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader"; // Import the Preloader component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {loading ? <Preloader /> : null}
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
