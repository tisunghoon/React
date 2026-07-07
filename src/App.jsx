// 1. 리액트 사전에서 필요한 도구 가져오기
// useState는 데이터(상태)를 관리해 주는 리액트의 핵심 마법 지팡이야.
import {useState} from 'react';

// 2. 화면 설계도 (컴포넌트) 만들기
// 예전에는 복잡한 클래스(class)를 썼지만, 요즘은 이렇게 심플한 함수(function)로 만들어!
function App() {

  // 3. 초기 데이터 세팅 (State)
  // count: 현재 화면에 보여줄 숫자 (초기값 0)
  // setCount: count 숫자를 변경할 때 쓸 전용 리모컨(함수)
  const [count, setCount] = useState(0);

  // 4. 데이터 변경 함수 만들기
  // 버튼을 누를 때마다 실행될 행동을 정의해.
  const handleIncrease = () => {
    // ⚠️ 주의: 리액트에서는 절대 count = count + 1 처럼 직접 바꾸면 안 돼!
    // 반드시 전용 리모컨인 setCount를 눌러서 "숫자 바꿀게요!" 하고 보고해야
    // 리액트가 알아채고 화면을 새로 그려줘.
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0); // 숫자를 다시 0으로 초기화
  };

  // 5. 화면 그리기 (Render & JSX)
  // 자바스크립트 파일 안이지만 HTML 태그를 자연스럽게 쓸 수 있어! (이게 바로 JSX)
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>나의 첫 리액트 카운터 🚀</h1>

      {/* 중괄호 { } 를 쓰면 HTML 안에서 자바스크립트 변수를 쏙 넣을 수 있어 */}
      <h2>현재 숫자: {count}</h2>

      {/* onClick 부분에 우리가 위에서 만든 함수를 연결해줘 */}
      <button onClick={handleIncrease} style={{ marginRight: '10px' }}>
        +1 더하기
      </button>

      <button onClick={handleReset}>
        초기화
      </button>
    </div>
  );
}

// 이 설계도를 다른 파일에서도 쓸 수 있게 내보내기
export default App;