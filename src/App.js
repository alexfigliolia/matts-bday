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
      'linear-gradient(to right, #56ccf2, #2f80ed)',
      'linear-gradient(to right, #8f94fb, #4e54c8)',
      'linear-gradient(to right, #00c6ff, #0072ff)',
      'linear-gradient(to right, #4776e6, #8e54e9)',
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
      mouse: true,
      mousewheel: true,
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

  shouldComponentUpdate(np, { activeIndex }) {
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
                <div className='note'>"Life is not measured by the number of breaths we take, but by the moments that take our breath away." - Maya Angelou<br /><br />I hope you have many more years of breathtaking moments! Happy Birthday!<br /><br /> - Leah</div>
                <div className='note'>Wishing you good health and happiness as you complete another trip around the sun!  Happy Birthday Matt! <br /><br /> - Nicole</div>
                <div className='note'>Happy Birthday Matt!!  Here's to many more years of maritime technical adventures 🐋🐧🗺🧭🇺🇸!<br /><br />- Daniel</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={4}
              classes={activeIndex === 4 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Hi Matt. I hope you have a great birthday weekend!  Happy returns to your day today and many more to come !! <br /><br />- Jim</div>
                <div className='note'>Matt, may this year be as successful as the last! Happy Birthday!<br /><br />- Luke</div>
                <div className='note'>Happy Birthday Matt!  Wishing you many special moments on this special day!<br /><br /> - Andy</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={5}
              classes={activeIndex === 5 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy Birthday, Matt! To many more healthy and happy years ❤️<br /><br />- Yasmeen</div>
                <div className='note'>Happy birthday! Hope this year is filled with success and happiness for you and your loved ones!<br /><br /> - Sameer</div>
                <div className='note'>Happy Birthday Matt, Forget the past; look forward to the future, for the best things are yet to come.<br /><br />- Samiullah</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={6}
              classes={activeIndex === 6 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Wishing you another wonderful year of happiness and joy. Happy Birthday Matt!<br /><br />- Dayana</div>
                <div className='note'>Happy birthday Matt!<br /><br />- Jamie</div>
                <div className='note'>Happy Birthday Matt !! I hope you had a great one 🥳<br /><br />- Muhammad</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={7}
              classes={activeIndex === 7 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy birthday Matt! Hoping for a great year of health and Carta to come!<br /><br />- Conor</div>
                <div className='note'>Happy Birthday Matt! Best wishes. Enjoy your day!!<br /><br /> - Guilherme</div>
                <div className='note'>Happy Birthday Matt, hope this coming year is a great one!<br /><br />- Scott</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={8}
              classes={activeIndex === 8 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy Birthday Matt! I hope you have a great  celebration!<br /><br />- Molly</div>
                <div className='note'>Happy Birthday! Wishing you and your family the best this year and for years to come!<br /><br />- Bassam</div>
                <div className='note'>Happy Birthday Matt, hope this is the best year yet!<br /><br />- Hannah</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={9}
              classes={activeIndex === 9 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy Birthday Anna dear. May you have an amazing year full of joy and happiness<br /><br />- Shiza</div>
                <div className='note'>Happy Birthday Matt!! May you have a FANTASTIC year ahead and thanks for all your support, best wises to you and your family! <br /><br />- Ron</div>
                <div className='note'>Happy Birthday Matt 🥳🥳<br /><br />- Taimur 🧦</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={10}
              classes={activeIndex === 10 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy birthday Matt! I hope this year is the best yet!<br /><br />- Kelli</div>
                <div className='note'>Happy birthday, Matt! Here’s to another year of health, happiness, success and lots of fun!<br /><br />- Lauren</div>
                <div className='note'>Happy Birthday Matt!!. Here's to many more!!!<br /><br />- Ratnakar</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={11}
              classes={activeIndex === 11 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy birthday, Matt! Hope it's full of Taco Bell FHIR sauce, Reese's socks, and cats galore! <br /><br />- Alekhya</div>
                <div className='note'>Azure light dazzling<br />Tidal waters surging<br />Have a 🐋 of a day!<br /><br />- Joh</div>
                <div className='note'>HBD Matt! Thanks for all your help! Hope you have a great day and an even better weekend!<br /><br />- Hollis</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={12}
              classes={activeIndex === 12 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy birthday Matt, wishing you an amazing year ahead<br /><br />- Shiza</div>
                <div className='note'>Happiest Birthday Matt! May this year be the best of all with happiness and good health 🕺<br /><br />- Saman</div>
                <div className='note'>Happy Birthday Matt! This year will be amazing<br /><br />- Albert</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={13}
              classes={activeIndex === 13 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Happy Birthday Matt!  Best!!<br /><br />- Sue</div>
                <div className='note'>Matt, I hope you have an amazing birthday!! Congrats on all you've achieved this year. You deserve the best<br /><br />- Alex</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={14}
              classes={activeIndex === 14 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>SALGIRA MUBARAK MACHLI JURAB KA PYAR<br />heri ya kuzaliwa kwa nyangumi anayenuka<br />Feliz cumpleaños ballena que ama mis calcetines<br />Janamdin mubarak ho badi machali ko moze pasand hai<br />с днем рождения кит который любит  носки!<br />Feliz Aniversário para a Baleia que ama as minhas meias<br />HBD 🐳 who ❤️ 🧦!<br />You will get moi nyam nyam nyam I promise, I will have sure that you have many many of my 🧦<br /><br />- Anna</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={15}
              classes={activeIndex === 15 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'><code>diff --git a/birthday b/birthday<br />index 63c5bcb..b287d1d 100644<br />--- a/birthday<br />+++ b/birthday<br />@@ -1,3 +1,3 @@<br />Happy Birthday<br />-Leonardo da Vinci + Matt</code><br /><br />- Mark</div>
              </div>
            </Slide3>
            <Slide1
              text1='Love,'
              text2='Carta'
              color={this.colors[2]}
              activeIndex={activeIndex}
              index={16}
              classes={activeIndex === 16 ? 'slide1 slide-end slide1-show' : 'slide1 slide-end'} />
          </div>
        </div>
      </Fragment>
    );
  }
}
