import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import BackButton from "../../components/BackButton";
import { theme } from "../core/theme";
import { Navigation } from "../../types";
import {
  emailValidator,
  passwordValidator,
  nameValidator
} from "../core/utils";
import { signInUser } from "../../api/auth-api";
import Toast from "../../components/Toast";

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [firstName, setFirstName] = useState({ value: "", error: "" });
  const [lastName, setLastName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onSignUpPressed = async () => {
    if (loading) return;

    const firstNameError = nameValidator(firstName.value);
    const lastNameError = nameValidator(lastName.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || firstNameError || lastNameError) {
      setFirstName({ ...firstName, error: firstNameError });
      setLastName({ ...lastName, error: lastNameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await signInUser({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }

    setLoading(false);
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("LoginScreen")} />

      <Logo />

      <Header>JOIN THE CLUB</Header>

      <TextInput
        label="👤 First Name"
        returnKeyType="next"
        value={firstName.value}
        onChangeText={text => setFirstName({ value: text, error: "" })}
        error={!!firstName.error}
        errorText={firstName.error}
        theme={{ colors: { primary: "#1C1C1C" } }}
        selectionColor={'#777777'}
        style= {styles.textInput}
      />

      <TextInput
        label="👥 Last Name"
        returnKeyType="next"
        value={lastName.value}
        onChangeText={text => setLastName({ value: text, error: "" })}
        error={!!lastName.error}
        errorText={lastName.error}
        theme={{ colors: { primary: "#1C1C1C" } }}
        selectionColor={'#777777'}
        style= {styles.textInput}
      />

      <TextInput
        label="✉️ Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        theme={{ colors: { primary: "#1C1C1C" } }}
        selectionColor={'#777777'}
        style= {styles.textInput}
      />

      <TextInput
        label="🔑 Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
        theme={{ colors: { primary: "#1C1C1C" } }}
        selectionColor={'#777777'}
        style= {styles.textInput}
      />

      <Button
        loading={loading}
        mode="contained"
        onPress={_onSignUpPressed}
        style={styles.button}
        color='#941100'
      >
        SIGN UP
      </Button>

      <Toast message={error} onDismiss={() => setError("")} />
    </Background>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 0,
    marginTop: -10,
    marginBottom: -10,
    height: 49
  },
  label: {
    color: theme.colors.secondary
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(RegisterScreen);