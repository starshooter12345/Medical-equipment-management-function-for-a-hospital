import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {
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
  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
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

    axios.put(`/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert('Post updated successfully');
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
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          equipmentName: res.data.post.equipmentName,
          supplyCompany: res.data.post.supplyCompany,
          stock: res.data.post.stock,
          priceIndollars: res.data.post.priceIndollars,
          ageInyears: res.data.post.ageInyears,
          description: res.data.post.description,
          employeeNIC: res.data.post.employeeNIC,
        });
        console.log(this.state.post);
      }
    });
  }
  render() {
    return (
      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Edit equipment</h1>
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
              placeholder='Enter employee NIC'
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
            &nbsp; Update
          </button>
        </form>
      </div>
    );
  }
}
