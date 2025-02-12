import React from "react";
import './Dashboard.css'
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";
import { FaProjectDiagram, FaHistory } from "react-icons/fa";


import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  const username = localStorage.getItem("username")
  const name = localStorage.getItem("name")
  console.log(username);

  return (
    <>

    <Navbar title="DASHBOARD"/>
    
    
    <div className="welcome"> Bienvenid@, {name}.</div>



    <div className="calendar">
    
    <Calendar/>
    </div>
        
    <div>
        Magna deserunt consectetur exercitation culpa. Ad laboris incididunt exercitation veniam elit irure eu. Lorem voluptate minim cupidatat qui aliqua. Qui irure cillum quis minim ad. Nisi voluptate laboris aute incididunt laborum consectetur nulla elit dolor eu commodo ad incididunt. Quis do aliqua amet sint dolore magna duis ut. Quis qui laborum velit minim et sit cillum.

        Minim labore qui amet eiusmod deserunt sint officia consectetur occaecat. Anim sint cupidatat exercitation duis officia duis labore dolor commodo velit enim nisi nulla do. Anim tempor eu proident id. Ipsum ut labore aliquip id ad laborum pariatur enim pariatur irure labore veniam occaecat et. Est aliqua in amet aliqua ea.

        Mollit dolore magna magna magna ex mollit dolore. Ullamco commodo ipsum dolor labore irure proident incididunt aute fugiat. Enim nisi est in tempor voluptate nostrud duis aliquip nostrud aliqua ad. Occaecat proident veniam officia laboris non nostrud ad. Fugiat dolor ullamco officia do consequat quis laboris deserunt cillum consectetur nostrud. Nulla dolor id irure sint cillum ullamco nostrud veniam. Id dolor et reprehenderit eiusmod et Lorem nulla dolore incididunt aliquip officia.

        Ullamco pariatur nisi minim aliqua nisi eu consectetur velit proident mollit. Voluptate ad ipsum in id ipsum velit id esse proident ut amet nulla ad non. Proident est Lorem culpa nulla ut cillum do reprehenderit labore consequat cupidatat. Qui fugiat sunt nisi ut Lorem enim ipsum adipisicing culpa fugiat. Pariatur aliqua enim eiusmod ullamco enim cupidatat in ad proident amet est dolore. Adipisicing et sit nulla consequat reprehenderit elit incididunt excepteur proident cupidatat velit ipsum.

        Adipisicing pariatur irure ad nulla proident est minim et est. Lorem ut est magna enim culpa dolor esse in ad est culpa ad nostrud. Dolore laboris ex id esse incididunt ad proident est ea in deserunt anim. Cupidatat do laborum veniam esse anim anim enim enim irure.

        Ut amet velit tempor nisi pariatur ex ad do minim officia cupidatat. Laboris do nostrud aliqua ad nulla ullamco tempor qui ea enim voluptate. Ut proident velit Lorem sunt voluptate reprehenderit Lorem. Reprehenderit mollit pariatur sit anim nulla aute sunt.

        Esse tempor aliqua aute est ad. Voluptate elit Lorem excepteur Lorem in. Qui amet irure incididunt fugiat amet Lorem. Duis cupidatat laboris est elit laboris nostrud enim sint culpa est dolor.

        Nostrud ullamco sit duis sit laborum eu officia. Minim enim tempor aliquip nostrud proident consectetur commodo sit cupidatat. Mollit culpa deserunt quis do tempor ullamco aliquip. Nostrud commodo proident labore anim incididunt cupidatat nisi. Culpa id nisi magna pariatur aliqua commodo anim elit amet irure cupidatat labore enim. Ea officia et enim quis esse proident veniam nulla nulla. Ea dolore reprehenderit minim in consequat occaecat proident id aliqua labore.

        Ex cupidatat adipisicing eiusmod est enim culpa deserunt. Magna aliquip sint pariatur ullamco. Mollit Lorem adipisicing amet exercitation pariatur minim ad voluptate quis incididunt sint dolore ipsum officia. Nulla laborum sint officia aliquip incididunt id anim velit ea. Occaecat incididunt consequat labore sunt aliquip anim sint. Reprehenderit adipisicing adipisicing aliqua eiusmod ea. Culpa pariatur sunt nostrud sit amet aliquip magna incididunt anim.
    </div>      
      </>
    
  );
};

export default Dashboard;
