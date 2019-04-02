
## My note of Build this website

#### 1 get start
```npx create-react-app xxx```

#### 2 Website structure
> src/components/(auth,dashboard,layout,travels)
auth - user sign in or sign up
dashboard - dashboard and notification
layout - navbar, signinlinks,signoutlinks
travels - create,detail,list,summary.

#### 3 Navbar
functional components
`npm install react-router-dom`
import { Link } from 'react-router-dom';

```
 <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Traverse</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
```

signInLinks
```
   <ul className="right">
        <li><NavLink to='/'>New Travel</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating blue lighten-1">MU</NavLink></li>
      </ul>
```

#### 4 Dashboard
import and nest dashboard into App.js
use Switch and Route in `react-router-dom`
```
<Switch>
    <Route path='/' component = { Dashboard } />
</Switch>
```

For dashboard, use grid sys to divide into two part, left for travel list, and right for notisfication. 

```<div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TravelList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
```
 Nest TravelSummary into TravelList to aviod duplicate. 



 #### 5 Details

 we need to create a page of post details

 so every post in the dashboard can be link to a detail page with a special id.

 ```<Route path='/travel/:id' component = {TravelDetails}/>```
 
 
 #### 6 Sign in/up component
 
 Use ES7 snippets to speed coding
 rfe
 rce 

Both of signin and signup are class based component and are quite similar as well as create from

#### 7 Redux

`npm install redux react-redux`

we want to kick everything start in index.js 
set store and there is a reducer in the store

`import { createStore } from 'redux';`
and then import Provider for the store, this is import from react-redux.
`import { Provider } from 'react-redux'`;
store = createStore(rootReducer);
`<Provider store={store}><App /></Provider>`

inside the store, we have to init reducer.

create a folder called store then we can put actions and reducers.

there r two reducers in our website, travelReducer and authReducer, an we also need a root reducer to combine them.

#### 8 Use redux to get data

The travel reducer is the one we store all the travel data, and the root reducer has all the data including tracvels and  auth data. 
But how we get this data for the dashboard file.

We have set Provider and store the data in the index.js file and that means it is a father component that we can get all props from it. To get data for dashboard, the only thing we need do is to import { connect } from  'react-redux' and set as hoc.
and return the data we need.

```
const mapStateToProps = (state) => {
    return {
        travels: state.travel.travels
    }
}

export default connect(mapStateToProps)(Dashboard);
```
#### 9 Redux-thunk

Redux-thunk is to deal with async data

#### 10 Firebase
`npm install firebase`

Travels Collections {
    title, content, authorFirstName, authorLastName, authorId, timestamp
}
User Collection {
    info about app users
}

Notisfications Collections
{
    info about notisfications
}

