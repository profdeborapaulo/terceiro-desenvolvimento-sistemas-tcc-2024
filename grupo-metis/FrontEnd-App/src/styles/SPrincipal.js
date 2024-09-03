import { StyleSheet } from "react-native";
import { colors, height, width } from "./GStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: width * 0.03,
    paddingTop: width * 0.2
  },
  page: {
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollView: {
    width: width * 0.9,
    maxHeight: width * 1.2,
  },
  scheduelePress: {
    width: width * 0.9,
    backgroundColor: colors.pcianalt,
    paddingVertical: width * 0.04,
    borderRadius: 17
  },
  schedueleText: {
    textAlign: 'center',
    color: '#f0f0f0',
    fontSize: 17
  }
});

export default styles;
