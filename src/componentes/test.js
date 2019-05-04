import React from 'react';
export default class Test extends React.Component {
    constructor(props){
        super(props);
        this.Recibir = this.Recibir.bind(this);
    }

    Recibir() {
      let url = "http://localhost:8080/ISST-19-rest/rest/resultados";
      fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.props.onChangeTest(JSON.stringify(json))
      })
      .catch(error =>{
          console.log(error)
      });
    }
    render(){

        return(
            <div>
              <button type="button" onClick={() => this.Recibir()}>Click Me</button>
              <div>
                {this.props.test}
              </div>
            </div>
        );
    }
}