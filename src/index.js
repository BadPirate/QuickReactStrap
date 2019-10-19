import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<App />, document.getElementById('root'))

if (process.env.REACT_APP_SERVICE_WORKER) {
  serviceWorker.register()
} else {
  serviceWorker.unregister()
}
