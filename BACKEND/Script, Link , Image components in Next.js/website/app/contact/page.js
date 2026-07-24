import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to Contact page")`}
      </Script>
      This is Contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook - Connect with the world",
  description: "This is page where you can contact facebook and we can connect with the world using facebook",
};
