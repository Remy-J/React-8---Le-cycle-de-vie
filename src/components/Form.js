import React, { Component } from 'react'

class Form extends Component {

    state = {
        title: '',
        globalTitle: ''
    }

    handleChange = (e) => {
        this.setState({ title: e.target.value })
    }


    componentDidMount() {
        console.log("Formulaire rendu")
    }

    submitForm = (e) => {
        e.preventDefault()
        this.setState({globalTitle:`Mon formulaire ${this.state.title}`})
    }

   componentDidUpdate = () => {
       return this.state.globalTitle !== '' ? console.log('titre changé') : ''
   }


    render() {
        return (

            <div className="form">
                <h1>{this.state.globalTitle}</h1>
                <form onSubmit={this.submitForm}>
                    <div className="form-data">
                        <label htmlFor="text">
                            Choise your Title
                        </label>
                        <input
                            type="text"

                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-data">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
       
    }
}

export default Form





