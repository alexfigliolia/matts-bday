import React from 'react';

export default function Slide1(props) {
	let inc = 0;
	return (
		<div 
			className={props.classes}
			style={{
				background: props.color
			}}>
			<div>
				<h1>
					{
						props.text1.split('').map((letter, i) => {
							inc ++;
							if(letter === ' ') {
								return (
									<div key={i}><h1>&nbsp;</h1></div>
								);
							} else {
								return (
									<div key={i}>
											<h1
												style={{
													transitionDelay: `${inc/10}s`
												}}>{letter}</h1>
											<div 
												className='burst'
												style={{
													transition: `transform 0.3s ${(inc/10)}s, opacity 0.2s ${0.2 + (inc/10)}s`,
													background: '#A2A8F8'
												}}></div>
											<div 
												className='burst'
												style={{
													transition: `transform 0.3s ${0.05 + (inc/10)}s, opacity 0.2s ${0.25 + (inc/10)}s`,
													background: '#47FEA0'
												}}></div>
											<div 
												className='burst'
												style={{
													transition: `transform 0.3s ${0.1 + (inc/10)}s, opacity 0.2s ${0.3 + (inc/10)}s`,
													background: '#F6FE55'
												}}></div>
											<div 
												className='burst'
												style={{
													transition: `transform 0.3s ${0.15 + (inc/10)}s, opacity 0.2s ${0.35 + (inc/10)}s`,
													background: '#4C4CF8'
												}}></div>
									</div>
								);
							}
						})
					}
				</h1>
				<h1>
					{
						props.text2.split('').map((letter, i) => {
							inc++
							if(letter === ' ') {
								return (
									<div key={i}><h1>&nbsp;</h1></div>
								);
							} else {
								return (
									<div key={i}>
											<h1
												style={{
													transitionDelay: `${inc/10}s`
												}}>{letter}</h1>
											<div 
												className='burst'
												style={{
													transition: `transform 0.3s ${(inc/10)}s, opacity 0.2s ${0.2 + (inc/10)}s`,
													background: '#A2A8F8'
												}}></div>
											<div 
												className='burst'
												style={{
													transition: `transform 0.3s ${0.05 + (inc/10)}s, opacity 0.2s ${0.25 + (inc/10)}s`,
													background: '#47FEA0'
												}}></div>
											<div 
												className='burst'
												style={{
													transition: `transform 0.3s ${0.1 + (inc/10)}s, opacity 0.2s ${0.3 + (inc/10)}s`,
													background: '#F6FE55'
												}}></div>
											<div 
												className='burst'
												style={{
													transition: `transform 0.3s ${0.15 + (inc/10)}s, opacity 0.2s ${0.35 + (inc/10)}s`,
													background: '#4C4CF8'
												}}></div>
									</div>
								);
							}
						})
					}
				</h1>

			</div>
		</div>
	);
}
