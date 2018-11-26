import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../../actions'

import Button from '../../components/Button'
import './styles.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateTerm = this.updateTerm.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  updateTerm(e) {
    this.setState({ term: e.target.value })
  }

  componentDidMount() {
    this.input.focus()
  }

  render() {
    return (
      <header className='header'>

        <h1 className='heading'>
          { this.props.children }
        </h1>

        <form className='searchForm' onSubmit={ this.handleSubmit }>
          <input className='input'
            ref={ input => this.input = input }
            value={ this.state.term } 
            onChange={ this.updateTerm }
            placeholder='enter city or zip'
          />
          <Button type='submit'>search</Button>
        </form>

      </header>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchWeather }, dispatch)
)


export default connect(null, mapDispatchToProps)(SearchBar)