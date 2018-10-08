import React from 'react';

export default class extends React.Component {
  static defaultProps = {
    text: '',
  }

  render() {
    const style = {
      fontSize: '14px',
      padding: '20px',
      backgroundColor: '#eee',
    };
    return (
      <div
        style={{
          ...style,
          ...this.props.style,
        }}
      >{this.props.text}</div>
    )
  }
}
