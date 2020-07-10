import React from 'react';

export default function Slide4(props) {
	return (
		<div 
			className={props.classes}
			style={{ background: props.color }}>
			<div>
				<h1>
					{
						'Alex'.split('').map((letter, i) => {
							if(letter === ' ') {
								return (
									<div key={i}>&nbsp;</div>
								);
							} else {
								return (
									<div 
										key={i}
										style={{
											transitionDelay: `${i/10}s`
										}}>{letter}</div>
								);
							}
						})
					}
				</h1>
			</div>
		</div>
	);
}