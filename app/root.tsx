import React from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
// @ts-ignore
import Header from "@js/ktl-component/header/index"; 
// @ts-ignore
import Footer from "@js/ktl-component/footer/index";

export default function Root() {
  return (
    <html lang="en" className="page_restyled_v2">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Kontenery dla portali (często wymagane przez komponenty JB) */}
        <div id="header-portal"></div>
        
        <div className="global-layout">
          <Header 
            productWebUrl="https://kotlinlang.org" 
            hasSearch={false} 
          />
          
          <main>
            <Outlet />
          </main>

          <Footer />
        </div>
        
        <div id="footer-portal"></div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}