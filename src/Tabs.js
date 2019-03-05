import PropTypes from 'prop-types';
import React, {
	Component
} from 'react';

import Tab from './Tab';

import './tabs.scss';

class Tabs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: props.children[0].props.label, //eslint-disable-line
			activeTabId: props.children[0].props.tabId, //eslint-disable-line
		};
		this.handleClick = this.handleClick.bind(this);
		this.onClickTabItem = this.onClickTabItem.bind(this);
	}

	onClickTabItem(tab, tabId) {
		const {
			tabState,
			onChangeTab
		} = this.props;
		this.setState({
			activeTab: tab,
			activeTabId: tabId,
		});
		// eslint-disable-next-line no-unused-expressions
		onChangeTab ? onChangeTab() : null;
		// eslint-disable-next-line no-unused-expressions
		tabState ? tabState(tab, tabId) : '';
	}

	handleClick() {
		const {
			onClick
		} = this.props;
		onClick('It Clicked');
	}

	render() {
		const {
			onClickTabItem,
			props: {
				children,
				customClass,
				tabsId,
				optionalText,
				rightContent,
			},
			state: {
				activeTab,
				activeTabId
			},
		} = this;

		return (
			<div id = {
				tabsId
			}
			className = {
				'tabs-container ' + customClass
			} >
			<ol className = "tab-list level"
			role = "tablist" >
			<div className = "tabs-left" > {
				optionalText && (
					<span className = "tabs-opt-text" > {
						optionalText
					} </span>
				)
			} {
				children.map(child => {
					const {
						label,
						tabId
					} = child.props;
					return (
						<Tab activeTab = {
							activeTab
						}
						activeTabId = {
							activeTabId
						}
						tabId = {
							tabId
						}
						key = {
							label
						}
						label = {
							label
						}
						onClick = {
							onClickTabItem
						}
						/>
					);
				})
			}
			</div> {
				rightContent
			}
			</ol>
			<div className = "tab-content"
			role = "tabpanel" > {
				children.map(
					child =>
					child.props.label === activeTab ||
					child.props.tabId === activeTabId ?
					child.props.children :
					undefined
				)
			}
			</div>
			</div>
		);
	}
}

Tabs.defaultProps = {
	customBtnClass: 'has-button',
	customClass: 'has-tabs',
	btnContent: 'Export Table',
	onClick: null,
	onClickBtn: null,
	tabsId: '',
	tabState: null,
	optionalText: null,
	rightContent: null,
	onChangeTab: null,
};

Tabs.propTypes = {
	btnContent: PropTypes.string,
	children: PropTypes.instanceOf(Array).isRequired,
	customBtnClass: PropTypes.string,
	customClass: PropTypes.string,
	onClick: PropTypes.func,
	onClickBtn: PropTypes.func,
	tabsId: PropTypes.string,
	tabState: PropTypes.func,
	optionalText: PropTypes.string,
	rightContent: PropTypes.element,
	onChangeTab: PropTypes.func,
};

export default Tabs;