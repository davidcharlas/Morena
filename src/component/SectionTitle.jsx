import React from 'react'

export default function SectionTitle({title}) {
    return (
        <div>
            <h2 className="editor-heading">
                <span>{title}</span>
            </h2>
        </div>
    )
}
