import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentName: '',
      supplyCompany: '',
      stock: '',
      priceIndollars: '',
      ageInyears: '',
      description: '',
      employeeNIC: '',
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  //validate function is the newly added function for validation of equipment name
  validate = () => {
    let isError = false;

    if (this.state.equipmentName.length < 5) {
      isError = true;
    }
    this.setState({
      ...this.state,
    });
    return isError;
  };
  //validate2 is the newly added validation function for employeeNIC
  /* validate2 = () => {
    let isError2 = false;
    if (
      !this.state.employeeNIC.includes('v') &&
      !this.state.employeeNIC.includes('V')
    ) {
      isError2 = true;
    }
    this.setState({
      ...this.state,
    });
    return isError2;
  };*/
  validate3 = () => {
    var z = this.state.employeeNIC;
    let isError2 = false;
    if (!/^[0-9]+$/.test(z)) {
      isError2 = true;
    }
    this.setState({
      ...this.state,
    });
    return isError2;
  };

  onSubmit = (e) => {
    e.preventDefault();
    //declaring error variable as err
    const err = this.validate();
    const err2 = this.validate3();

    const {
      equipmentName,
      supplyCompany,
      stock,
      priceIndollars,
      ageInyears,
      description,
      employeeNIC,
    } = this.state;

    const data = {
      equipmentName: equipmentName,
      supplyCompany: supplyCompany,
      stock: stock,
      priceIndollars: priceIndollars,
      ageInyears: ageInyears,
      description: description,
      employeeNIC: employeeNIC,
    };

    console.log(data);

    if (!err && !err2) {
      axios.post('/post/save', data).then((res) => {
        if (res.data.success) {
          this.setState({
            equipmentName: '',
            supplyCompany: '',
            stock: '',
            priceIndollars: '',
            ageInyears: '',
            description: '',
            employeeNIC: '',
          });
        }
      });
    } else {
      if (err) {
        alert('Equipment name should be atleast 5 characters');
      } else if (err2) {
        alert('Invalid NIC');
      }
    }
  };
  render() {
    return (
      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Add new equipment</h1>
        <form className='needs-validation' noValidate>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Equipment Name</label>
            <input
              type='text'
              className='form-control'
              name='equipmentName'
              placeholder='Enter equipment name'
              value={this.state.equipmentName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Supply company</label>
            <input
              type='text'
              className='form-control'
              name='supplyCompany'
              placeholder='Enter supply company'
              value={this.state.supplyCompany}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Stock</label>
            <input
              type='number'
              className='form-control'
              name='stock'
              placeholder='Enter stock'
              value={this.state.stock}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Price In dollars</label>
            <input
              type='number'
              className='form-control'
              name='priceIndollars'
              placeholder='Enter price in dollars'
              value={this.state.priceIndollars}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Age in years</label>
            <input
              type='number'
              className='form-control'
              name='ageInyears'
              placeholder='Enter age in years'
              value={this.state.ageInyears}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Description </label>
            <input
              type='text'
              className='form-control'
              name='description'
              placeholder='Enter description'
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Employee NIC </label>
            <input
              type='text'
              className='form-control'
              name='employeeNIC'
              //added for NIC validation
              //added  second comment

              maxLength={12}
              placeholder='Enter Employee NIC'
              value={this.state.employeeNIC}
              onChange={this.handleInputChange}
            />
          </div>
          <button
            className='btn btn-success'
            type='submit'
            style={{ marginTop: '15px' }}
            onClick={this.onSubmit}
          >
            <i className='far fa-check-square'></i>
            &nbsp; Save
          </button>
        </form>
      </div>
    );
  }
}
