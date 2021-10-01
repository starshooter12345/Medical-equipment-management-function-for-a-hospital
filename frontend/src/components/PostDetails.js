import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

export default class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });
        console.log(this.state.post);
      }
    });
  }
  //newly added jspdf generator function
  jsPDFGenerator = () => {
    const { equipmentName, supplyCompany, stock, description, employeeNIC } =
      this.state.post;
    //new document in jspdf
    var doc = new jsPDF('p', 'pt');
    doc.text(200, 40, `${equipmentName} Report`);
    doc.text(100, 120, 'Equipment Name');
    doc.text(100, 140, 'Supply Company');
    doc.text(100, 160, 'Description');
    doc.text(100, 180, 'Employee NIC');

    doc.text(300, 120, equipmentName);
    doc.text(300, 140, supplyCompany);
    doc.text(300, 160, description);
    doc.text(300, 180, employeeNIC);

    //set the font for pdf
    doc.setFont('courier');
    doc.setFontSize(10);

    doc.text(150, 400, 'Report by Sakura Medical Equipment Management');

    //save the pdf
    doc.save(`${employeeNIC}.pdf`);
  };
  render() {
    const {
      equipmentName,
      supplyCompany,
      stock,
      priceIndollars,
      ageInyears,
      description,
      employeeNIC,
    } = this.state.post;
    return (
      <div style={{ marginTop: '20px' }}>
        <h4>{equipmentName}</h4>
        <hr />
        <d1 className='row'>
          <dt className='col-sm-4'>Supply Company</dt>
          <dd className='col-sm-10'>{supplyCompany}</dd>

          <dt className='col-sm-4'>Description</dt>
          <dd className='col-sm-10'>{description}</dd>

          <dt className='col-sm-4'>Employee</dt>
          <dd className='col-sm-10'>{employeeNIC}</dd>
        </d1>

        <a
          className='btn btn-success btn-lg btn-block'
          href='#'
          onClick={this.jsPDFGenerator}
        >
          <i className='fas fa-cogs'></i> &nbsp;Generate Report
        </a>
      </div>
    );
  }
}
