import React from "react";
import Layout from "./../components/layout";
import {Link,graphql,useStaticQuery } from "gatsby";
import "./blog.scss";

export default function Blog(){
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(
                    sort:{
                        fields:publishedDate,
                        order:DESC
                    }
                ){
                edges{
                    node{
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)


    return(
        <Layout>
            <h1>Blogs </h1>
            <ol className="posts">
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return(
                        <li className="post">
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
