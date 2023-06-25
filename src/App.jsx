import { IconContext } from "react-icons";
import { AuthProvider } from "./context/AuthContext";
import NavigationScroll from "./Helpers/NavigationScroll";
import TheRoutes from "./routes";

function App() {
  return (
    <AuthProvider>
      <NavigationScroll>
        <IconContext.Provider
          value={{
            color: "#464646",
            size: 36,
          }}
        >
          <TheRoutes />
        </IconContext.Provider>
      </NavigationScroll>
    </AuthProvider>
  );
}

export default App;
