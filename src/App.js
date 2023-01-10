import logo from './Gro.png';
import './App.css';
import nash  from "./nash.png";
import mub from "./mub.png"

function App() {
  return (
    <div className='home'>
      <div className='hmp'>
       
        <div className='meb'>
      
        <div className='list'>
        
         <h6 className='l1'>Заполните форму</h6>
         <h1 className='l2'>остались вопросы?</h1>

         <input onClick={ ()=>{
           const inp = document.querySelector('.in1');
           inp.style.border ="none";
         }}  className='in1' placeholder="Ваше имя*" />
         <hr className='f1'></hr>

         <input className='in1' placeholder="Ваш номер телефона*" />
         <hr className='f1'></hr>

         <input className='in1' placeholder="Страна" />
         <hr className='f1'></hr>

          <input className='in1' placeholder="Комментарий" />
         <hr className='f1'></hr>

         <input className='chek'  type="checkbox" />
         <label className='lbl'>Подтверждая заказ, я принимаю условия<br className='br'/> пользовательского соглашения</label>
         <br/>
         <button className="kn">запросить звонок</button>
        </div>
        <div className='hom2'>
          <div className='fo1'>
            <img className='n' src={logo}  />
          </div>
            <img  className="nash" src={nash} />
        </div>
        </div>
        
        
      </div>
     
    </div>
    
  );
}

export default App;
