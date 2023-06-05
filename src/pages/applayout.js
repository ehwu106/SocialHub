import { Button, View } from "@aws-amplify/ui-react";

function AppLayout({ signOut, children }) {
  return (
    <View className="App">
      {children}
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default AppLayout;
