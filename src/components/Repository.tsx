import * as React from "react";
import {Container, List, Content} from "native-base";
import {Headers} from "./Headers";
import ListMenu from "./ListMenu";
import {PersonalСert} from "./PersonalСert";
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
            <ListMenu title="Личные сертификаты" img={require("../../imgs/general/certificates_menu_icon.png" )}
              arrow nav={() => navigate("PersonalСert")}/>
            <ListMenu title="Сертификаты других пользователей" img={require("../../imgs/general/certificates_menu_icon.png")}
              arrow nav={() => null}/>
            <ListMenu title="Промежуточные сертификаты" img={require("../../imgs/general/certificates_menu_icon.png")}
              arrow nav={() => null}/>
            <ListMenu title="Доверенные корневые сертификаты" img={require("../../imgs/general/certificates_menu_icon.png")}
              arrow nav={() => null}/>
          </List>
        </Content>
      </Container>
    );
  }
}