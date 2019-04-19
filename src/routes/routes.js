import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllComments from '../Components//AllComments/AllComments';

//here is where I create the routes I need if I was creating a bigger website. 

export default(
    <Switch>
        <Route exact path='/' component={AllComments}/>
       
        
    </Switch>
)