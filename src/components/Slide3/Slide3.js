import React, { Component } from 'react';

export default class Slide3 extends Component {

	shouldComponentUpdate({ classes }) {
		return classes !== this.props.classes;
	}

	render() {
		const { classes, color, children } = this.props;
		return (
			<div
				className={classes}
				style={{
					background: color
				}}
				id='slide3'>
				<div>
					{
						children ||
						<p>From all of us at Carta, we wish you the happiest of birthdays! We are truly grateful for your leadership and are inspired by your vision. Congratulations on all you've achieved this year. We are so happy to be by your side!</p>
					}
					<div
						className='shape'
						style={{
							transition: 'transform 0.2s 0.0s, background 0.2s 0.2s'
						}}>
						<div style={{
							transition: 'transform 0.2s 0.1s, background 0.2s 0.3s'
						}}></div>
						<div style={{
							transition: 'transform 0.2s 0.1s, background 0.2s 0.3s'
						}}></div>
						<div style={{
							transition: 'transform 0.2s 0.1s, background 0.2s 0.3s'
						}}></div>
					</div>
					<div
						className='shape'
						style={{
							transition: 'transform 0.2s 0.05s, background 0.2s 0.25s'
						}}>
						<div style={{
							transition: 'transform 0.2s 0.15s, background 0.2s 0.35s'
						}}></div>
						<div style={{
							transition: 'transform 0.2s 0.15s, background 0.2s 0.35s'
						}}></div>
						<div style={{
							transition: 'transform 0.2s 0.15s, background 0.2s 0.35s'
						}}></div>
					</div>
					<div
						className='shape'
						style={{
							transition: 'transform 0.2s 0.1s, background 0.2s 0.3s'
						}}>
						<div style={{
							transition: 'transform 0.2s 0.2s, background 0.2s 0.4s'
						}}></div>
						<div style={{
							transition: 'transform 0.2s 0.2s, background 0.2s 0.4s'
						}}></div>
						<div style={{
							transition: 'transform 0.2s 0.2s, background 0.2s 0.4s'
						}}></div>
					</div>
					<div
						className='shape'
						style={{
							transition: 'transform 0.2s 0.15s, background 0.2s 0.35s'
						}}>
						<div style={{
							transition: 'transform 0.2s 0.25s, background 0.2s 0.45s'
						}}></div>
						<div style={{
							transition: 'transform 0.2s 0.25s, background 0.2s 0.45s'
						}}></div>
						<div style={{
							transition: 'transform 0.2s 0.25s, background 0.2s 0.45s'
						}}></div>
					</div>
					<div
						className='shape'
						style={{
							transition: 'transform 0.2s 0.3s, background 0.2s 0.4s'
						}}>
						<div style={{
							transition: 'transform 0.2s 0.3s, background 0.2s 0.5s'
						}}></div>
						<div style={{
							transition: 'transform 0.2s 0.3s, background 0.2s 0.5s'
						}}></div>
						<div style={{
							transition: 'transform 0.2s 0.3s, background 0.2s 0.5s'
						}}></div>
					</div>
				</div>
			</div >
		);
	}
}
