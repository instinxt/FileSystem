import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

	const ref = useRef(null);

	const data = [
		{
			desc: 'Lorem ipsum dolor sit. ipsum dolor sit amet consectetur adipisicing elit.',
			filesize: '.4 mb',
			close: true,
			tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' }
		},
		{
			desc: 'Lorem ipsum dolor sit. ipsum dolor sit amet consectetur adipisicing elit.',
			filesize: '.4 mb',
			close: true,
			tag: { isOpen: true, tagTitle: 'Upload', tagColor: 'green' }
		},
		{
			desc: 'Lorem ipsum dolor sit. ipsum dolor sit amet consectetur adipisicing elit.',
			filesize: '.4 mb',
			close: true,
			tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'blue' }
		}
	];

	return (
		<div ref={ref} className='fixed z-[3] top-0 left-0 p-5 w-full h-full flex gap-10 flex-wrap'>
			{data.map((item, index) => (
				<Card data={item} reference={ref}/>
			))}
		</div>
	)
}

export default Foreground