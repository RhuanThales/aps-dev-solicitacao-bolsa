import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import Header from "./src/components/Header";
import MyButton from "./src/components/MyButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: 0,
      period: 0,
      shift: 0,
      sex: 0,
      valor: 5000,
      status: false,
      courses: [
        {
          key: 0,
          name: 'Administracao'
        },
        {
          key: 1,
          name: 'Biologia'
        },
        {
          key: 2,
          name: 'Contabeis'
        }
      ],
      periods: [
        {
          key: 0,
          value: '1º'
        },
        {
          key: 1,
          value: '2º'
        },
        {
          key: 2,
          value: '3º'
        },
        {
          key: 3,
          value: '4º'
        },
        {
          key: 4,
          value: '5º'
        },
        {
          key: 5,
          value: '6º'
        }
      ],
      shifts: [
        {
          key: 0,
          value: 'Vespertino'
        },
        {
          key: 1,
          value: 'Diurno'
        },
        {
          key: 2,
          value: 'Noturno'
        }
      ],
      sexs: [
        {
          key: 0,
          value: "Masculino"
        },
        {
          key: 1,
          value: "Feminino"
        }
      ],
    };
    this.getName = this.getName.bind(this);
    this.getAge = this.getAge.bind(this);
    this.send = this.send.bind(this);
  }
  getName(val) {
    this.setState({ name: val });
  }

  getAge(val) {
    this.setState({ age: val });
  }

  send(){
    if(this.state.age === '' || this.state.name === ''){
      alert('Digite o nome/idade');
      return;
    }
    alert({
      Nome: this.state.name,
      Curso: this.state.course,
      Periodo: this.state.period,
      Idade: this.state.age,
      Sexo: this.state.sex,
      Renda: this.state.valor,
      Bolsa: this.state.status
    })
  }

  render() {
    let coursesItem = this.state.courses.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.name} />;
    });

    let periodsItem = this.state.periods.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.value} />;
    });

    let shiftsItem = this.state.shifts.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.value} />;
    });

    let sexsItem = this.state.sexs.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.value} />;
    });

    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Text style={styles.logo}>Selecione os parâmetros:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu nome"
          onChangeText={this.getName}
        />
        <Picker
          selectedValue={this.state.course}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ course: itemValue })
          }
        >
          {coursesItem}
        </Picker>

        <Picker
          selectedValue={this.state.period}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ period: itemValue })
          }
        >
          {periodsItem}
        </Picker>

        <Picker
          selectedValue={this.state.shift}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ shift: itemValue })
          }
        >
          {shiftsItem}
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Digite a sua idade"
          onChangeText={this.getAge}
        />

        <Picker
          selectedValue={this.state.sex}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ sex: itemValue })
          }
        >
          {sexsItem}
        </Picker>

        <Text style={styles.courses}>Renda</Text>
        <Slider
          minimumValue={0}
          maximumValue={10000}
          onValueChange={(selectedValue) =>
            this.setState({ valor: selectedValue })
          }
          value={this.state.valor}
          minimumTrackTintColor="red"
          maximumTrackTintColor="blue"
        />
        <Text style={styles.courses}>Renda: {this.state.valor.toFixed(2)}</Text>

        <Text style={styles.courses}>Já Ganhou bolsa?: </Text>
        <Switch
          style={styles.courses}
          value={this.state.status}
          onValueChange={(valorSwitch) =>
            this.setState({ status: valorSwitch })
          }
          thumbColor="blue"
        />
        <Text style={styles.logo}>{this.state.status ? "Sim" : "Nao"}</Text>

        <Text style={styles.logo}>Informações inseridas: </Text>
        <Text style={styles.courses}>Nome: {this.state.nom}</Text>
        <Text style={styles.courses}>
          Curso: {this.state.courses[this.state.course].nome}
        </Text>
        <Text style={styles.courses}>
          Período: {this.state.periods[this.state.period].per}º
        </Text>
        <Text style={styles.courses}>
          Turno: {this.state.shifts[this.state.shift].tur}
        </Text>
        <Text style={styles.courses}>Idade: {this.state.idade}</Text>
        <Text style={styles.courses}>
          Sexo: {this.state.sexs[this.state.sex].sex}
        </Text>
        <Text style={styles.courses}>Renda: {this.state.valor.toFixed(2)}</Text>

        <Text style={styles.courses}>
          Já ganhou bolsa?: {this.state.status ? "Sim" : "Nao"}
        </Text>

        <MyButton
          btnFontSize={30}
          btnBorderColor="#2195"
          btnColor="#FFF"
          btnBackgroundColor="#2196F3"
          style={styles.courses}
          onPress={this.send}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  courses: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 20,
    padding: 10,
    margin: 10
  }
});
