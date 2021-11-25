import { Container } from "@mui/material";
import { Provider } from "react-redux";
import MainPage from "./pages/Main";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Container component="main" maxWidth="md">
        <MainPage />
      </Container>
    </Provider>
  );
}

export default App;
