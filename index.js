function convertTemperature() {
  const conversionType = document.getElementById("conversionType").value;
  const temperatureInput = parseFloat(
    document.getElementById("temperatureInput").value
  );
  let Converted_Value;

  if (conversionType === "Celsius To Fahrenheit") {
    Converted_Value = (temperatureInput * 9) / 5 + 32;
    document.getElementById(
      "Converted_Value"
    ).innerText = `Converted_Value: ${Converted_Value.toFixed(2)} °Fahrenheit`;
  } else if (conversionType === "Fahrenheit To Celsius") {
    Converted_Value = ((temperatureInput - 32) * 5) / 9;
    document.getElementById(
      "Converted_Value"
    ).innerText = `Converted_Value: ${Converted_Value.toFixed(2)} °Celsius`;
  } else if (conversionType === "Kelvin To Celsius") {
    Converted_Value = temperatureInput - 273.15;
    document.getElementById(
      "Converted_Value"
    ).innerText = `Converted_Value: ${Converted_Value.toFixed(2)} °Celsius`;
  } else if (conversionType === "Celsius To Kelvin") {
    Converted_Value = temperatureInput + 273.15;
    document.getElementById(
      "Converted_Value"
    ).innerText = `Converted_Value: ${Converted_Value.toFixed(2)} Kelvin`;
  } else if (conversionType === "Kelvin To Fahrenheit") {
    Converted_Value = (9 / 5) * temperatureInput - 459.67;
    document.getElementById(
      "Converted_Value"
    ).innerText = `Converted_Value: ${Converted_Value.toFixed(2)} °Fahrenheit`;
  } else if (conversionType === "Fahrenheit To Kelvin") {
    Converted_Value = (5 / 9) * (temperatureInput + 459.67);
    document.getElementById(
      "Converted_Value"
    ).innerText = `Converted_Value: ${Converted_Value.toFixed(2)} Kelvin`;
  } else {
    Converted_Value = "Invalid conversion type";
  }
}
