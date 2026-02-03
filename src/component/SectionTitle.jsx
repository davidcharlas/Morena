import React from 'react'

export default function SectionTitle({ title }) {
    return (
        <div style={{ display: "flex", alignItems: "end" }}>
            <h2 className="editor-heading">
                <span>{title}</span>
            </h2>
        </div>
    )
}
