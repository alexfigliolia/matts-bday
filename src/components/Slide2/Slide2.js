import React, { Component } from 'react';
import Swipe from './Swipe';

export default class Slide2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: 'slide2'
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ classes: 'slide2 slide2-show' });
		}, 1000);
	}

	componentWillReceiveProps({ activeIndex, index }) {
		if (activeIndex === index) {
			this.setState({ classes: 'slide2 slide2-show' });
		} else {
			this.setState({ classes: 'slide2' });
		}
	}

	shouldComponentUpdate({ activeIndex }, { classes }) {
		if (activeIndex !== this.props.activeIndex) return true;
		else if (classes !== this.state.classes) return true;
		return false;
	}

	render() {
		return (
			<div
				className={this.state.classes}
				style={{
					background: this.props.color
				}}>
				<div>
					<h1>
						{
							'Hey Matt!'.split('').map((letter, i) => {
								if (letter === ' ') {
									return (
										<div key={i}><h1>&nbsp;</h1></div>
									);
								} else {
									return (
										<div key={i}>
											<h1
												style={{
													transitionDelay: `${i / 10}s`
												}}>{letter}</h1>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${(i / 10)}s, opacity 0.2s ${0.2 + (i / 10)}s`,
													background: '#A2A8F8'
												}}></div>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${0.05 + (i / 10)}s, opacity 0.2s ${0.25 + (i / 10)}s`,
													background: '#47FEA0'
												}}></div>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${0.1 + (i / 10)}s, opacity 0.2s ${0.3 + (i / 10)}s`,
													background: '#F6FE55'
												}}></div>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${0.15 + (i / 10)}s, opacity 0.2s ${0.35 + (i / 10)}s`,
													background: '#4C4CF8'
												}}></div>
										</div>
									);
								}
							})
						}
					</h1>
					<Swipe />
				</div>
			</div>
		);
	}
}
