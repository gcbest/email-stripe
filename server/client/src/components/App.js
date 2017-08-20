import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

// Browser Router expects at most one child component

// Browser Router checks to see if each Route's path contains
// a string that is in the current url path


const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header/>
                    { /* Route components treated like normal components */ }
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route path="/surveys/new" component={SurveyNew}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;