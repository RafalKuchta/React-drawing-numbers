class App extends React.Component {
    state = {
        value: ""
    }

    showNumber = () => {
        this.setState ({
            value: this.state.value + Math.floor(Math.random() * 10)
        })
    }

    render(){
        return (
            <>
            <button onClick={this.showNumber}>Losuj liczny</button>
            <h1>{this.state.value}</h1>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))