import React, {useState} from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Gif from './Gif';
import './App.css';


const SortableGifsContainer = sortableContainer(({ children }) => <div className="gifs">{children}</div>);
const SortableGif = sortableElement(({ gif }) => <Gif key={gif} gif={gif} />);


const App = () => {
  const [gifs, setGifs] = useState([
    'https://media.giphy.com/media/3ohhwoWSCtJzznXbuo/giphy.gif',
    'https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif',
    'https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif',
    'https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif',
  ]);

  const [newGifs, setNewGifs] = useState([
    'https://media.giphy.com/media/xiOgHgY2ceKhm46cAj/giphy.gif',
    'https://media.giphy.com/media/3oKIPuMqYfRsyJTWfu/giphy.gif',
    'https://media.giphy.com/media/4ZgLPakqTajjVFOVqw/giphy.gif',
    'https://media.giphy.com/media/3o7btXIelzs8nBnznG/giphy.gif',
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => setGifs(arrayMove(gifs, oldIndex, newIndex));

  return (
    <div className="App">
      <h1>Drag those Gif's around</h1>
      <h2>Set 1</h2>
      <SortableGifsContainer axis="x" onSortEnd={onSortEnd}>
        {gifs.map((gif, i) => 
          <SortableGif 
            index={i}
            key={gif} 
            gif={gif} 
          />
        )}
      </SortableGifsContainer>
    </div>
  );
}

export default App;