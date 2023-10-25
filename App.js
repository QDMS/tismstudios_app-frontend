import { Provider } from "react-redux";
import Main from "./Main";
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

const stripeKey = "pk_test_51LktmtFIvazyJRNo0jqGngIZEKr6bkVum4BgyIvxtYnu4e34tQKFW0tS7oZ5vsyDWbr69GPD6DVyMdrqXEtJXQy600XYShZLVS";

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
