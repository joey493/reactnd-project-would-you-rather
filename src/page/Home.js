import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom'
import Answered from '../component/Answered'
import Unanswered from '../component/Unanswered'

const Home =  () => {
    const { url } = useRouteMatch()

    return (
        <main className="main">
            <nav className='flex  overflow-hidden'>
                <NavLink activeClassName='bg-main-color text-white' className='home-nav' to='/home/unanswered'>Unanswered</NavLink>
                <NavLink activeClassName='bg-main-color text-white' className='home-nav' to='/home/answered'>Answered</NavLink>
            </nav>
            <Switch>
                <Route exact path={`${url}/unanswered`} component={Unanswered} />
                <Route exact path={`${url}/answered`} component={Answered} />
            </Switch>
        </main>
    )
}

export default Home
