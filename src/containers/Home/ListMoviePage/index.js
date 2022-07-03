import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { actFetchData } from "./reducer/actions";
import Loader from "components/loader";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.dispatch(actFetchData());
  }
  renderListMovie = () => {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return data?.map((item, index) => (
      <Movie key={index} danhSachPhim={item} />
    ));
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ListMoviePage</h1>
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.filmReducer.loading,
    data: state.filmReducer.data,
  };
};

export default connect(mapStateToProps)(ListMoviePage);
