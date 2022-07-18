import { connect } from 'react-redux'
import AddSubCounter from './components/AddSubCounter';
import DisplayCounter from "./components/DisplayCounter";
import IncDecCounter from './components/IncDecCounter';

function App() {
  return (
    <div>
      <DisplayCounter/>
      <IncDecCounter/>
      <AddSubCounter/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counter
  }
}

export default connect(mapStateToProps) (App);
