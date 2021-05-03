import { Link,graphql,useStaticQuery } from "gatsby";
import React from "react";
import "./header.scss";

export default function Header(){
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `);
    console.log(data);
    return(
        <>
        <header className="header">
            <h1 >
                <Link to="/" className="title">
                    {data.site.siteMetadata.title }
                </Link>
            </h1>
            <ul className="nav-list">
                <li><Link className="link" activeClassName="active-nav-link" to="/" >Home</Link></li>
                <li><Link to="/about" className="link" activeClassName="active-nav-link">About</Link></li>
                <li><Link to="/blog" className="link" activeClassName="active-nav-link">Blog</Link></li>
                <li><Link to="/contact" className="link" activeClassName="active-nav-link">Contact</Link></li>
            </ul>
        </header>
        </>
    )
}
