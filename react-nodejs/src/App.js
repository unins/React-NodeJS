import MyName from './MyName';
import MyName2 from './MyName2';
import Counter from './counter'
import React, { Component, Fragment } from 'react'; {/* fragment 불러오기 */}

class App extends Component {
    render() {
        const name = 'velopert';
        const value = 3;
        const style = {
          backgroundColor: 'black', //카멜타입 사용
          padding: '16px',
          color: 'white',
          fontSize: 5 + 10 + 'px'
        };
        return (
          <fragment> {/* div 없이 태그를 묶는 fragment */}
            <div>
                hello {name}
            </div>
            <div>
              <input type='text'/> {/* Self closing tag '/>' */}
            </div>
            {
              1 + 1 === 2
                ? 'correct'
                : 'wrong'
            }
            {
              name === 'velopert' && <div>벨로퍼트다!</div>
            }
            {
              (() => {
                if (value === 1) return <div>1이다!</div>
                if (value === 2) return <div>2다!</div>
                if (value === 3) return <div>3이다!</div>
                return <div>없다</div>
              })() 
            } {/* 소괄호로 감싸고 바로 실행 */}
            <div style={style} className="class" > {/* className 사용 */}
              안녕하세요!
            </div>
            <div>
              {/* 멀티라인 주석 */}
              <h1 
              //주석 
              >
                리액트
              </h1>
            </div>
            <MyName name='리액트'/>
            <MyName2 name="inflearn" />
            <Counter />
          </fragment>
        );
    }
}

export default App;