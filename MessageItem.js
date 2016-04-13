import React, { Component, PropTypes } from 'react';

class MessageItem extends React.Component {
  render() {
    const {from_me, content, time} = this.props;
    return (
      <div className={(from_me)?"message-item message-from-me" : "message-item message-from-other"}>
					<span>{content}</span>
			</div>
    ) ;
  }
}
MessageItem.propTypes = {
  from_me: React.PropTypes.bool,
  content: React.PropTypes.string,
  time:    React.PropTypes.string
}

module.exports = MessageItem;