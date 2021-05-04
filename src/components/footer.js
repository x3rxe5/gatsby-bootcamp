import React from "react";
import { graphql,useStaticQuery } from "gatsby";
import "./footer.scss";

export default function Footer(){
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    const name = data.site.siteMetadata.author
    return(
        <>
            <footer className="footer">
                <h4>This website made by {name} &copy; 2021</h4>
            </footer>
        </>
    )
}
