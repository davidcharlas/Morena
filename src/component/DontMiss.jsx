import React from 'react'
import Article from './Article'
import SectionTitle from './SectionTitle'
export default function DontMiss() {
    const articles = [
        {
            img:"mis1",
            title: "Go For Western Economy With These Pioneering"
        },
        {
            img:"mis2",
            title: "Moving through: the everyday urban jungle of your city"
        },
        {
            img:"mis3",
            title: "Business Discussion Tips To Have Receptive Communications"
        },
        {
            img:"mis4",
            title: "Why is Child Development Important in the Early Years"
        }
    ]
    return (
        <>
        <section className="editor-section" style={{flexDirection: 'column', background: "linear-gradient(to right, var(--primaryColor), var(--secondaryColor))"}}>
            <div style={{marginBottom: "20px", color: 'white'}}><SectionTitle title="Don't Miss _" /></div>
            <div className='article-list' style={{color:"white"}}>
                {articles.map((article, index) => (
                <Article key={index} img={article.img} title={article.title} />
            ))}
            </div>
        </section>
        </>
    )
}
