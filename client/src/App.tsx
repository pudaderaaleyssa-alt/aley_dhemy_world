import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Landing from "./pages/Landing";
import World from "./pages/World";

// 1. Fixed the paths to use forward slashes
function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/world" component={World} />
      
      {/* Basic Fallback so you don't get a 404 inside the app */}
      <Route>
        <div className="flex items-center justify-center min-h-screen">
          <p>404 - Page Not Found</p>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      {/* 2. Passed switchable=true so your toggle logic works */}
      {/* 3. Removed children={undefined} as it's handled by the closing tag */}
      <ThemeProvider defaultTheme="light" switchable={true}>
        <Router /> 
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;