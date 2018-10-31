import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../Components/Search/Search";
import { transaction } from "../../Store/DummyData/data";
import Table from "../Components/Table/Table";
import PrintTransaction from "../Components/PrintTransaction/PrintTransaction";

export class HomePage extends Component {
  state = {
    search: "",
    isPrint: true
  };

  handleSearch = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { search, isPrint } = this.state;
    let filteredData =
      search.length > 0
        ? transaction.filter(
            item => item.transactionId.toString().indexOf(search) !== -1
          )
        : transaction;
    // if (filteredData.length === 0 && search.length > 0) {
    //   return <h1 className="well">NO DATA FOUND</h1>;
    // } else if (search === 0 && filteredData.length === 0) {
    //   filteredData = transaction;
    // }
    return (
      <div className="home">
        <div className="col-sm-8">
          <Search
            title="Search Transaction"
            onChange={e => this.handleSearch(e)}
            query={this.state.search}
          />
        </div>
        <div className="col-sm-4">
          <PrintTransaction isPrint={isPrint}>
            <Table data={filteredData} />
          </PrintTransaction>
        </div>
        <div className="col-sm-12">
          <Table data={filteredData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
