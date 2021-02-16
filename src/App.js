import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactos: [
        {
          name: 'Juan',
          lastname: 'Ramos',
          email: 'jramos@algo.com'
        },
        {
          name: 'Juana',
          lastname: 'Ramos',
          email: 'juanar@algo.com'
        }
      ],
      index: null
    }
    // le paso this a la variable
    this.addContact = this.addContact.bind(this);
    this.changeData = this.changeData.bind(this);
  }

  addContact() {
    let {contactos} = this.state;
    // inicializo la constante los datos que se van a mandar
    const contacto = {
      name: '',
      lastname: '',
      email: ''
    };
    contactos.push(contacto);
    this.setState({contactos: contactos})
  }

  changeData(e, index) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    let {contactos} = this.state;

    contactos[index][name] = value;

    this.setState({ contactos: contactos });
  }

  render() {
    return (
        <div className="App">

          <h2 className="content-center mx-auto text-center">Formulario dinamico</h2>
          <div className="container mx-auto max-w-3xl">
            <div className=" grid grid-cols-3 gap-3 px-4 py-0 pt-4">
              <div>
                <label htmlFor="name" className="label-input">Nombre(s)</label>
              </div>
              <div>
                <label htmlFor="lastname" className="label-input">Apellido(s)</label>
              </div>
              <div>
                <label htmlFor="email" className="label-input">Correo electrónico</label>
              </div>
            </div>
            {
              this.state.contactos.map((item, index) => {
                return (
                    <div className="grid grid-cols-3 gap-3 px-4 py-0 pt-4" key={index}>
                      <div>
                        <input type="text" name="name" className="form-input" value={item.name} onChange={(e) => this.changeData(e, index) } />
                      </div>
                      <div>
                        <input type="text" name="lastname" className="form-input" value={item.lastname} onChange={(e) => this.changeData(e, index) }/>
                      </div>
                      <div>
                        <input type="email" name="email" className="form-input" placeholder="hola@ejemplo.com" value={item.email} onChange={(e) => this.changeData(e, index) }/>
                      </div>
                    </div>
                )
              })
            }
            <button className="btn-purple mt-6 ml-4 mx-auto" type="button" onClick={this.addContact}>
              Agregar nuevo contacto
            </button>
          </div>
        </div>
    );
  }
}

export default App;
