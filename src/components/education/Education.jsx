import React from "react";
import "./Education.css";

export const Education = () => {
  return (
    <>
      <div className="main-edu-box">
        <span className="edu-heading">
          <h1 className="main-h">EDUCATION</h1>
        </span>
        <hr />
        <section className="list-sec1">
          {/* <div className="masters-edu div-box">
            <h1 className="h-masters headings">Masters</h1>
            <h1 className="board-name">
              RGPV University , Bhopal , MP
              <br />
              2022 - 2024
            </h1>
            <p className="discription">
              At present I'm persuing Masters in Computer Application ( MCA )
              from IPS Academy , Indore , Madhya Pradesh , which is affiliated
              to RGPV University .
            </p>
          </div> */}
        </section>
        <section className="list-sec2">
          <div className="bachelors-edu div-box">
            <h1 className="h-bachelors headings">Bachelor of Science.</h1>
            <h1 className="board-name">
              Government Holkar Science College Indore (M.P)
              <br />
              2021-2024
            </h1>
            <p className="discription">
              I am persuing Bachelor of Computer Science (B.Sc) from Government Holkar Science College Indore (M.P.) , which is affiliated to
              Davi Ahilya Visvidhyalaya Indore (M.P.)
            </p>
          </div>
          {/* <div className="diploma-edu div-box">
            <h1 className="h-diploma headings">Diploma</h1>
            <h1 className="board-name">
              NIOS , Goverment of India
              <br />
              2017 - 2019
            </h1>
            <p className="discription">
              I had done Diploma in Elementary Education (D.El.Ed) from National
              Institute of Open Schooling (NIOS) , under Ministry of Education ,
              Goverment of India.
            </p>
          </div> */}
        </section>
        <section className="list-sec3">
          <div className="12th-edu div-box">
            <h1 className="h-12th headings">
              12<sup>th</sup>
            </h1>
            <h1 className="board-name">
              MP BOARD , Bhopal , MP <br />
              in 2020-2021
            </h1>
            <p className="discription">
              I had done 12<sup>th</sup> with Math Stream from Saraswati Shishu
              Mandir , Chhatarpur , (M.P.)
            </p>
          </div>

          <div className="10th-edu div-box">
            <h1 className="h-10th headings">
              10<sup>th</sup>
            </h1>
            <h1 className="board-name">
              MP BOARD , Bhopal , MP <br />
              in 2018-2019
            </h1>
            <p className="discription">
              I had done 10<sup>th</sup> from Saraswati Shishu Mandir
              from Chhatarpur,(M.P.)
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
