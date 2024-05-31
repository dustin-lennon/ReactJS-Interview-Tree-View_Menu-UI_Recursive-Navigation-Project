import './App.css';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      {/* Tree View Component */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
