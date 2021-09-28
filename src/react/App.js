import '../css/App.css';
import {useState} from 'react';
import {RecoilRoot} from 'recoil';
import {useAPIKey, useSetAPIKey} from '../recoil/hooks';
import {Pane, Dialog, TextInput} from 'evergreen-ui'

function App() {
  const key = useAPIKey();
  return (
    <div className="App">
      <header className="App-header">
        <p>{key}</p>
      </header>
      <EditAPIKeyDialog />
    </div>
  );
}

function EditAPIKeyDialog() {
  const key = useAPIKey();
  const setKey = useSetAPIKey();
  const [text, setText] = useState(key ?? '');
  const isShown = key == null;
  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Set an AlphaVantage API Key"
        confirmLabel="Update API Key"
        intent="success"
        hasClose={false}
        hasCancel={false}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEscapePress={false}
        isConfirmDisabled={text == null || text === ''}
        onConfirm={(close) => {
          setKey(text);
          close();
        }}
      >
      <Pane>
      This application uses AlphaVantage to retrieve stock data and you must use your personal AlphaVantage API key.
      This application has no backend and there's no way for us to see this :)
      You can get your AlphaAPI Key from <a href="https://alphavantage.co">here</a>.
      </Pane>
      <Pane marginTop={16}>
      <TextInput
        placeholder="Your API Key"
        onChange={e => setText(e.target.value)}
        required={true}
        value={text} />
      </Pane>
      </Dialog>
    </Pane>
  )
}

function AppWrapper() {
return <RecoilRoot><App/></RecoilRoot>;
}

export default AppWrapper;
