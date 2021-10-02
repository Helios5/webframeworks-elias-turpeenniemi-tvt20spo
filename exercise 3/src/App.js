import React from 'react';
import styles from './app.module.css';
import SearchView from './components/SearchView';
import data from './data.json'


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
      adminModeActive: false,
    }
  }

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  render()
  {
    let output =
      <>
        <div>
        <img src="/images/logo.png"alt="" style={{marginTop: -8}} style={{marginLeft: -8}}/>
        <div className={styles.background}> </div>
        <div className={styles.searchBackground}> Search <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
        </div>
        </div> 
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          />
      </>
    return (
      <>
        { output }
      </>
    )
  }
}

export default App;