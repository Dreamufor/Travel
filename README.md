
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
 
 ES7 snippets
 rfe
 rce 

Both of signin and signup are class based component and are quite similar as well as create from
