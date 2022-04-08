import react from "react";
import { Text,View } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  // objetc destruction para sacra la informacion
  // const { firstname ="Hector", lastname="Galvan" } = props; añadidas por default
  const{firstname,lastname}=props;
  return (
  <Text>Hola {firstname} {lastname}</Text>
  );
}

Saludar.defaultProps={
  firstname:"Agustin",
  lastname:"Navarro Galdon",
}
Saludar.propTypes={
  firstname: PropTypes.string.isRequired,
  lastname:PropTypes.string.isRequired,
}