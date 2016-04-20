import React, { Component, PropTypes } from 'react';
import './MessageItem.css';

class MessageItem extends Component {
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
  from_me: PropTypes.bool,
  content: PropTypes.string,
  time:    PropTypes.string
}

module.exports = MessageItem;