import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from 'src/store';
import { get_hello } from 'src/store/home/reducer';
import { update_theme as redux_update_theme } from 'src/store/reducer';
import { Select } from 'antd';
import { theme_change_list } from './constants';
import { Page } from 'src/components/Page';
interface IProps{
  get_hello: typeof get_hello.request.action,
  update_theme: typeof redux_update_theme,
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
      id: 0,
    };
  }

  send_request = () => {
    this.props.get_hello({ id: this.state.id });
  };

  change_input = (e: any) => {
    this.setState({
      id: e.target.value,
    });
  };


  render() {
    const { count, message } = this.props;
    const { id } = this.state;
    return (
      <Page description='test page' title='test' >
        <div>{count}</div>
        <button onClick={this.send_request}>发请求</button>
        <div>{message}</div>
        <input type="text" onChange={this.change_input} value={id} />
        <Select options={theme_change_list} style={{ width: '200px' }} onChange={(value) => { this.props.update_theme({ prefixCls: value }); }} />
      </Page>
    );
  }
}

function MapStateToProps(state: RootState) {
  return {
    count: state.home.count_box.count,
    message: state.home.hello_box.message,
  };
}

function MapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    get_hello: get_hello.request.action,
    update_theme: redux_update_theme,
  }, dispatch);
}

export const TestComponentContainer = connect(MapStateToProps, MapDispatchToProps)(TestComponent);

