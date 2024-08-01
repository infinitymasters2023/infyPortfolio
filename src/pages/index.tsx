import React, { useEffect } from 'react'
import Layout from "../Layout/Layout"
import Home from "@/pages/Home"
import AOS from "aos";
import 'aos/dist/aos.css';

function Index() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default Index