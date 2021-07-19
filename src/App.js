import { React, Suspense } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import routes from './utilities/routes'
import Loader from './components/loader'
import './App.css'

const routeGen = routes.map((v, i) => (
    <Route key={i} path={v.path} exact={v.exact} component={v.component} />
))

const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                {routeGen}
                <Route>
                    <button>
                        <Link to="/">Go back to homepage</Link>
                    </button>
                    <img
                        src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg"
                        alt="404"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Route>
            </Switch>
        </Suspense>
    )
}

export default App
