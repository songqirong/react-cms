import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "src/store";
import { get_hello } from "src/store/home/reducer";
interface IProps{
  get_hello: typeof get_hello.request.action,
  count: number,
  message: string
}

interface IState{
  id: number
}

class TestComponent extends PureComponent<IProps, IState>{
  constructor(props: any) {
    super(props);
    this.state = {
      id: 0
    }
  }

  send_request = () => {
    this.props.get_hello({ id: this.state.id });
  }

  change_input = (e: any) => {
    this.setState({
      id: e.target.value
    })
  }

  render() {
    const { count, message } = this.props;
    const { id } = this.state;
    return (
      <div>
        <div>{count}</div>
        <button onClick={this.send_request}>发请求</button>
        <div>{message}</div>
        <input type="text" onChange={this.change_input} value={ id }/>
      </div>
    )
  }
}

function MapStateToProps(state: RootState) {
  return {
    count: state.home.count_box.count,
    message: state.home.hello_box.message
  }
}

function MapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    get_hello: get_hello.request.action
  }, dispatch)
}

export const TestComponentContainer = connect(MapStateToProps, MapDispatchToProps)(TestComponent)