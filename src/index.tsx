import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';
import Menu from './components/menu/index';
import Slider from './components/Slider';
import getThemeContext from './components/themeContext';
const ThemeContext = getThemeContext();
class App extends React.Component<any,any>{
  constructor(props:any){
    super(props);
  }
  render(){
    return <div className="lanxin-home-wrapper">
      <div className="lanxin-header-wrapper">
        <span className="header-title">兰新同学录</span>
      </div>
      <div className="lanxin-content-wrapper">
        <Slider></Slider>
            
          <ThemeContext.Provider value="金黄色">
          <Menu/>
        </ThemeContext.Provider>
      </div>
      
    </div>
  }

}

ReactDOM.render(<App/>,
  document.getElementById('app')
);
/**
 * Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言
 */

