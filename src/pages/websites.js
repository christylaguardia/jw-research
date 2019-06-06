import React from "react"
import { graphql } from "gatsby"
import { Hero } from "../components/Hero";
import { Website } from "../components/Website";
import { Navigation } from '../components/Navigation';;

export default ({ data }) => (
  <div>
    <Navigation />
    <Hero title="Websites" />
    <div className="container">
      <div className="section">
        {data && data.allContentfulWebsite.edges.map(({ node }) => (
          <Website node={node} />
        ))}
      </div>
    </div>
  </div>
);

export const query = graphql`
  {
    allContentfulWebsite {
      edges {
        node {
          title
          url {
            url
          }
          description {
            description
          }
        }
      }
    }
  }
`;
