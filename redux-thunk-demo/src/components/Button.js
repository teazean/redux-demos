import React from 'react';

export default class extends React.Component {
  static defaultProps = {
    onClick: () => {},
    text: '点击',
  }

  render() {
    const style = {
      fontSize: '14px',
      padding: '5px 10px',
    };
    return (
      <button
        style={{
          ...style,
          ...this.props.style,
        }}
        onClick={this.props.onClick}
      >{this.props.text}</button>
    )
  }
}
