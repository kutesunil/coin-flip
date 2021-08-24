import React, { Component } from 'react';
import Random from './helper';
import './App.css';

class App extends Component {
  static defaultProps = {
    items: [
      {
        side:'head',
        imageUrl: 'https://lenadesign.org/wp-content/uploads/2020/06/head.png'
      },
      {
        side:'tail',
        imageUrl: 'https://lenadesign.org/wp-content/uploads/2020/06/tail.png'
      }
    ]
  }
  constructor(props) {
    super(props);

    this.state = {
      coin : null,
      totalFlip : 0,
      head : 0,
      tail : 0,
      flip : false
    };
  }

  flipCoin = (evt) => {
    evt.preventDefault();
    let rand = Random(this.props.items);
    this.setState((st) => {
      return {
        coin : rand,
        totalFlip : st.totalFlip + 1,
        head : st.head + (rand.side === 'head' ? 1 : 0),
        tail : st.tail + (rand.side === 'tail' ? 1 : 0),
        flip : true
      }
    })
    setTimeout (() => {
      this.setState({flip : false});
    }, 2000);
  }

  render() {
    return(
      <>
        <div className="container text-center">
        
          <button type="button" className="btn btn-danger"
          onClick={this.flipCoin}>Flip</button>
          <hr />
          {
            this.state.totalFlip >= 1
            ?
            <>
            <img src={this.state.coin.imageUrl} alt={this.state.coin.side}
              className= { this.state.flip  ? 'flipper' : ''}
            />
            <hr />
            <h3>
              You total flip count is {this.state.totalFlip} and your head count {this.state.head} and your tail count is { this.state.tail}
            </h3>
            </>
            :
            ''
          }
        </div>

      </>
    )
  }
}

export default App;