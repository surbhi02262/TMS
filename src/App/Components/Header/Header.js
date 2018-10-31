import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "react-router-dom/Link";
import Helmet from "react-helmet";

class Header extends Component {
  static propTypes = {
    headerTitle: PropTypes.string.isRequired
  };

  render() {
    const { headerTitle, appName, isLoggedIn } = this.props;
    return (
      <div className="header">
        <div>{appName}</div>
        <Helmet>
          <title>{headerTitle}</title>
        </Helmet>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerTitle: state.header.title,
  appName: state.header.appName,
  isLoggedIn: state.header.user.isLoggedIn
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
