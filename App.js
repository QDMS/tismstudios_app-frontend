import { Provider } from "react-redux";
import Main from "./Main";
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";
import config from "./config";

const stripeKey = process.env.REACT_APP_STRIPE_KEY;

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#FFFFFF",
        timeout: 5,
      }}
      merchantIdentifier="tismstudios.com"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}
