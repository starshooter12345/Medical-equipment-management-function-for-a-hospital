import React, { Component } from 'react';
import axios from 'axios';

export default class EquiHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.retrievePosts();
  }
  retrievePosts() {
    axios.get('/posts').then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`/post/delete/${id}`).then((res) => {
      alert('Deleted successfully');
      this.retrievePosts();
    });
  };

  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.equipmentName.toLowerCase().includes(searchKey) ||
        post.supplyCompany.toLowerCase().includes(searchKey) ||
        post.description.toLowerCase().includes(searchKey)
    );
    this.setState({ posts: result });
  }
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get('/posts').then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };
  render() {
    return (
      <div className='container'>
        <p>All Equipment</p>
        <div className='col-lg-3 mt-2 mb-2'>
          <input
            className='form-control'
            type='search'
            placeholder='Search'
            name='searchQuery'
            onChange={this.handleSearchArea}
          ></input>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>EquipmentID</th>
              <th scope='col'>Equipment Name</th>
              <th scope='col'>Supply Company</th>
              <th scope='col'>Stock</th>
              <th scope='col'>Price in dollars</th>
              <th scope='col'>Age in years</th>
              <th scope='col'>Description</th>
              <th scope='col'>Employee NIC</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>
                  <a
                    href={`/post/${posts._id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {posts.equipmentName}
                  </a>
                </td>
                <td>{posts.supplyCompany}</td>
                <td>{posts.stock}</td>
                <td>{posts.priceIndollars}</td>
                <td>{posts.ageInyears}</td>
                <td>{posts.description}</td>
                <td>{posts.employeeNIC}</td>
                <td>
                  <a className='btn btn-warning' href={`/edit/${posts._id}`}>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  <br></br>
                  &nbsp;
                  <br></br>
                  <a
                    className='btn btn-danger'
                    href='#'
                    onClick={() => this.onDelete(posts._id)}
                  >
                    <i className='far fa-trash-alt'></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='btn btn-success'>
          <a href='/add' style={{ textDecoration: 'none', color: 'white' }}>
            Add new equipment
          </a>
        </button>
      </div>
    );
  }
}
