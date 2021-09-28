import '../css/App.css';
import EditAPIKeyDialog from './EditAPIKeyDialog.react';
import StockSearchInput from './StockSearchInput.react';
import {RecoilRoot} from 'recoil';
import {useSetAPIKey} from '../recoil/hooks';
import {Pane, Text, Button} from 'evergreen-ui'

function App() {
  const setAPIKey = useSetAPIKey();
  return (
    <Pane display="flex" height="100vh">
      <Pane width={300} height="100vh" display="flex" flexDirection="column" padding={16} elevation={1}>
        <Pane flex={1}>
          <Text>Enter a stock to plot:</Text>
          <StockSearchInput />
        </Pane>
        <Button height={48} onClick={() => setAPIKey()}>Reset API Key</Button>
      </Pane>
      <Pane flex={1} height="100vh" />
      <EditAPIKeyDialog />
    </Pane>
  );
}


function AppWrapper() {
return <RecoilRoot><App/></RecoilRoot>;
}

export default AppWrapper;
