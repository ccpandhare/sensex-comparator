import '../css/App.css';
import EditAPIKeyDialog from './EditAPIKeyDialog.react';
import StockSearchInput from './StockSearchInput.react';
import {RecoilRoot} from 'recoil';
import {useSetAPIKey, useData} from '../recoil/hooks';
import useNormalisedData from '../data/useNormalisedData';
import {Pane, Text, Button} from 'evergreen-ui'

function App() {
  useNormalisedData();
  const setAPIKey = useSetAPIKey();
  const data = useData();

  return (
    <Pane display="flex" height="100vh">
      <Pane width={300} height="100vh" display="flex" flexDirection="column" padding={16} elevation={1}>
        <Pane flex={1}>
          <Text>Enter a stock to plot:</Text>
          <StockSearchInput />
        </Pane>
        <Button height={48} onClick={() => setAPIKey()}>Reset API Key</Button>
      </Pane>
      <Pane flex={1} height="100vh">
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </Pane>
      <EditAPIKeyDialog />
    </Pane>
  );
}


function AppWrapper() {
return <RecoilRoot><App/></RecoilRoot>;
}

export default AppWrapper;
