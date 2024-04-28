import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/");
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default App;
