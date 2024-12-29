import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },

        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },

        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },

        },

    ];
    return (
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap">
            {data.map((item, index) => <Card data={item} reference={ref} />)}

        </div>

    )
}

export default Foreground