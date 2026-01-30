import React from 'react'
import SectionTitle from './SectionTitle'

export default function TopCategory() {
    const categories = [
        { name: "Business", count: 5 },
        { name: "Lifestyle", count: 7 },
        { name: "Travel", count: 6 },
    ]
    return (
        <div className='top-category'>
            <div style={{ margin: "20px 0px" }}><SectionTitle title={"Top Categories"} /></div>
            <div className="top-category-container">
                {categories.map((item, index) => (
                    <div key={index} className="category-tag">
                        <span className="category-name">{item.name}</span>
                        <span className="category-count">{item.count}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
