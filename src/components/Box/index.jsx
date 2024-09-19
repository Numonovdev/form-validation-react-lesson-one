import './index.css';

function Box(props){
     const {ism, yosh, fam, id}=props;
     return(
          <div className="box">
            <h1>Ism: {ism}</h1>
            <h1>Familya: {fam}</h1>
            <h1>Yosh: {yosh}</h1>
          </div>
     );
}

export default Box;