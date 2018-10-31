import React from "react";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return <div> {this.props.children}</div>;
  }
}

class PrintTransaction extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <a href="#">
              <span
                className="glyphicon glyphicon-print tPrint"
                aria-hidden="true"
              />
            </a>
          )}
          content={() => this.componentRef}
        />
        {this.props.isPrint && (
          <div className="componnent-to-print">
            <ComponentToPrint ref={el => (this.componentRef = el)}>
              {this.props.children}
            </ComponentToPrint>
          </div>
        )}
      </div>
    );
  }
}
export default PrintTransaction;
