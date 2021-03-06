import * as React from "react";
import {Container, Header, List, Content} from "native-base";
import {Headers} from "./Headers";
import ListMenu from "./ListMenu";
import {styles} from "../styles";

interface RepositoryProps {
  navigation: any;
}

export class Repository extends React.Component<RepositoryProps> {

  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Headers title="Управление хранилищами" goBack={() => goBack()}/>
        <Content>
          <List>
            <ListMenu title="КриптоПро Cloud ООО ТЕНЗОР" img={require("../../imgs/general/certificates_menu_icon.png" )}
              arrow nav={() => null}/>
            <ListMenu title="КриптоПро Cloud TEST" img={require("../../imgs/general/certificates_menu_icon.png")}
              arrow nav={() => null}/>
            <ListMenu title="Локальное хранилище" img={require("../../imgs/general/certificates_menu_icon.png")}
              arrow nav={() => null}/>
            <ListMenu title="SD Card Alladin" img={require("../../imgs/general/certificates_menu_icon.png")}
              arrow nav={() => null}/>
          </List>
        </Content>
      </Container>
    );
  }
}