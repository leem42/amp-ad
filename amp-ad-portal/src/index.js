import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import runAllQueries from './queryForData';

//import defaultData from './defaultData/DefaultData.js'
//import defaultFlyData from './defaultData/DefaultFlyData.js'
//import defaultHumanData from './defaultData/DefaultHumanData.js'
//import defaultMouseData from './defaultData/DefaultMouseData.js'
//import defaultRatData from './defaultData/DefaultRatData.js'
//import defaultWikiData from './defaultData/DefaultWikiData.js'
//import defaultWikiProgramData from './defaultData/DefaultWikiProgramData'
//import defaultWikiContributorsData from './defaultData/DefaultWikiContributorsData'

//for production fetch the data
runAllQueries().then( data => {
  //console.log(data)
  ReactDOM.render(<App 
    speciesSelection = {data.speciesList}
    allSpeciesData = {data.allspeciesData}
    humanData = {data.humanData}
    humancelllineData = {data.humancelllineData}
    flyData = {data.flyData}
    mouseData = {data.mouseData}
    ratData = {data.ratData}
    //humanData = {data.humanData}
    //mouseData = {data.mouseData}
    //ratData = {data.ratData}
    //flyData = {data.flyData}
    //allSpeciesData = {data.allSpeciesData}
    wikiNewsData = {data.wikiNewsData}
    wikiProgramData = {data.wikiProgramData}
    wikiContributorsData = {data.wikiContributorsData}
    wikiDataUseData = {data.wikiDataUseData}
    />, document.getElementById('root'));
})

// for testing use the local data 
//ReactDOM.render(
		//<App 
			//humanData = {defaultHumanData}
			//mouseData = {defaultMouseData}
			//ratData = {defaultRatData}
			//flyData = {defaultFlyData}
			//allSpeciesData = {defaultData}
			//wikiData = { String(defaultWikiData) }
			//wikiProgramData = { String(defaultWikiProgramData) }
			//wikiContributorsData = { String(defaultWikiContributorsData) }
		///>
	//, document.getElementById('root')
//);

registerServiceWorker();
