import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './content-toggle.css';

export default class ContentToggle extends Component {
  static propTypes = {
    summary: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  state = { isOpen: false };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { children, summary } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="content-toggle">
        <button
          className={
            classNames(
              'content-toggle__summary',
              { 'content-toggle__summary--is-open': isOpen },
            )
          }
          onClick={this.handleClick}
        >
          {summary}
        </button>
        {isOpen &&
          <div className="content-toggle__details">
            {children}
          </div>
        }
      </div>
    );
  }
}
