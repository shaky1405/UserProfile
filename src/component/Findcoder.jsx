import BtnBlock from "./BtnBlock";
import style from "./Findcoder.module.css";
import MenuBlock from "./MenuBlock";


const Findcoder = () => {
  return (
    <section id={style.nav}>
      <article>
        <div id={style.Logo}>
          <LogoBlock/>
        </div>
        <div id={style.Menu}>
          <MenuBlock/>
        </div>
        <div id={style.Btn}>
           <BtnBlock/>
        </div>
        
      </article>
    </section>
  );
};
export default Findcoder;
