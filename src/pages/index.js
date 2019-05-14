import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
// import {FaGulp} from "react-icons/fa"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
const IndexPage = ({data}) => ( 
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
      img = {data.img.childImageSharp.fluid}
      title = "Cafe Mary Josephine"
      styleClass = "default-background"
    />
    <Info></Info>
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: {eq: "default-background.jpeg"}){
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;

export default IndexPage

