import React, {Component} from 'react';

export default class DigitalClicker extends Component {

    constructor() {
        super();
    
        this.state = {
          timesClicked: 0,
        };
      }
    
      click = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
      };
    
      render() {
        return (
          <div>
            <button onClick={this.click}><label>{this.state.timesClicked}</label></button>
          </div>
        );
      }

}
