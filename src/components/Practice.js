import React from 'react'

export class Practice extends React.Component {
  state = {
    currentIndex: 0,
    isFront: true,
  }
  handleFlip = (ev) => {
    this.setState((state) => ({ isFront: !this.state.isFront }))
  }
  render() {
    const { cards } = this.props
    const { currentIndex, isFront } = this.state
    const { term = '', definition = '' } =
      cards && cards.length && cards[currentIndex]
    return (
      <div className="practiceContainer">
        <h3>Practice</h3>
        <div className="progress">
          {currentIndex + 1}/{cards.length}
        </div>
        <div className="card">
          <div className="practiceTerm">{isFront ? term : definition}</div>
          <div className="practiceButtons">
            <button
              type="button"
              className="tertiary"
              onClick={this.handleFlip}
            >
              {isFront ? 'show back' : 'show front'}
            </button>
            <div>
              <button type="button" className="secondary">
                previous
              </button>
              <button type="button" className="primary">
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
