import PropTypes from "prop-types";
import React, { Component } from "react";


class Tab extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { label, tabId, onClick } = this.props;
    onClick(label, tabId);
  }

  render() {
    const {
      onClick,
      props: { activeTab, label, tabId, tabIndex }
    } = this;

    let className = "tab-list-item";
    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      // eslint-disable-next-line
			<li
				id={tabId}
				className={className}
				onClick={onClick}
				role="tab"
				tabIndex={tabIndex}
				onKeyPress={e => (e.key === "Enter" ? onClick() : null)}
			>
				<span className="tab-item-text">{label}</span>
			</li>
    );
  }
}

Tab.defaultProps = {
  tabId: "",
  tabIndex: 0
};

Tab.propTypes = {
  tabId: PropTypes.string,
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number
};

export default Tab;
