import React, { Component, Fragment } from 'react';
import PageSwitch from 'pageswitch';
import Slide1 from './components/Slide1/Slide1';
import Slide2 from './components/Slide2/Slide2';
import Slide3 from './components/Slide3/Slide3';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    }
    this.pw = null;
    this.colors = [
      'linear-gradient(to bottom, #FC4958, #FC2A29)',
      'linear-gradient(to bottom, #ed213a, #FC0967)',
      'linear-gradient(to top, #eb3349, #f45c43)',
      'linear-gradient(to top, #d31027, #ea384d)',
    ];
  }

  componentDidMount() {
    this.pw = new PageSwitch('switcher', {
      duration: 600,
      direction: 0,
      start: 0,
      loop: false,
      ease: 'ease',
      transition: 'flip3d',
      freeze: false,
      mouse: false,
      mousewheel: false,
      arrowkey: true,
      autoplay: false,
    });
    this.pw.on('after', index => {
      this.setState({ activeIndex: index });
    });
    setTimeout(() => {
      this.setState({ activeIndex: 0 });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, { activeIndex }) {
    return activeIndex !== this.state.activeIndex;
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <Fragment>
        <div className="App" style={{ height: window.innerHeight }}>
          <div id='switcher'>
            <Slide2
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={0} />
            <Slide1
              text1='Happy'
              text2="Birthday!"
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={1}
              classes={activeIndex === 1 ? 'slide1 slide1-show' : 'slide1'} />
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={2}
              classes={activeIndex === 2 ? 'slide3 slide3-show' : 'slide3'} />
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={3}
              classes={activeIndex === 3 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Let's raise a toast to one of the most inspirational individuals that I have ever known. Anna, thank you for inspiring us the way you do. It’s truly an honor to know you.<br /><br /> - Joh</div>
                <div className='note'>Happy Bday Anna! Thank you for all your support and guidance and allowing me to learn and grow with you and the team!! I really appreciate everything and wish you the best bday ever!<br /><br /> - Junnie</div>
                <div className='note'>Happy birthday, Anna! We are all so lucky to work with you and are inspired by your dedication to make healthcare better, one whale-filled error message at a time. All the best for this upcoming year!<br /><br />- Alekhya</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={4}
              classes={activeIndex === 4 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy Birthday Anna! You're a great team leader, mentor, and friend, and always make it evidently clear just who the real whale is. Hope you have a great day!<br /><br />- Conor</div>
                <div className='note'>Happy Birthday!!! You are my third favorite Anna (a close third), after after my mom and baby! Even closer or sometimes 2nd when they yell or cry at me<br /><br />- David</div>
                <div className='note'>Happy Birthday Anna!  Here’s to another great (and less pandemic-y, less sheltered, less killer bees, and less Kanye-for-President) year!<br /><br /> - Andy</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={5}
              classes={activeIndex === 5 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy Happy birthday Anna! May God grant the desires of your heart. Stay happy, healthy and safe. have a blast!<br /><br />- Lorraine</div>
                <div className='note'>Happy Birthday Anna!! I hope you’ve had a great year and that we can get back to crushing the rock wall soon!<br /><br /> - Daniel</div>
                <div className='note'>Happy Birthday Anna! I hope get lots of socks so you don’t run out of them.<br /><br />- Himanshu</div>
                <div className='note'>Happy Birthday! Another year closer to world domination!!<br /><br />- Hannah</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={6}
              classes={activeIndex === 6 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy Birthday Anna, the real Whale!<br /><br />- Bassam</div>
                <div className='note'>Happy Birthday Anna, the real Whale!<br /><br />- Reem</div>
                <div className='note'>Happy birthday Anna! Best wishes<br /><br />- Reem</div>
                <div className='note'>Happy birthday Anna!!<br /><br />- Theodora</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={7}
              classes={activeIndex === 7 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy Birthday Anna!!<br /><br />- Ratnakar</div>
                <div className='note'>Happy Birthday Anna!<br /><br /> - Dorothy</div>
                <div className='note'>Have a great birthday!<br /><br />- Liza</div>
              </div>
            </Slide3>
            <Slide1
              text1='Love,'
              text2='Carta'
              color={this.colors[2]}
              activeIndex={activeIndex}
              index={8}
              classes={activeIndex === 8 ? 'slide1 slide-end slide1-show' : 'slide1 slide-end'} />
          </div>
        </div>
      </Fragment>
    );
  }
}
