// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightmode: true, cla: 'li'}

  onCk = () => {
    const {lightmode, cla} = this.state
    if (lightmode) {
      this.setState({lightmode: false, cla: 'd'})
    } else {
      this.setState({lightmode: true, cla: 'li'})
    }
  }

  render() {
    const {lightmode, cla} = this.state
    // eslint-disable-next-line
    return (
      <div className="c">
        <div className={cla}>
          <h1 className="h">Click to Change Mode</h1>
          {lightmode && (
            <button className="ccc" type="button" onClick={this.onCk}>
              DarkMode
            </button>
          )}
          {!lightmode && (
            <button className="ccc" type="button" onClick={this.onCk}>
              Lightmode
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default LightDarkMode
