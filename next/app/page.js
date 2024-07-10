import Image from "next/image";

export default function Home() {
  return (
        <main className="main wrapper">
            <section className="main__about">
                <span className="main__about__subtitle">Witam</span>
                <h1 className="main__about__title">Selling on the <br/> internet like a pro</h1>
                <p className="main__about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium
                    ex repudiandae nostrum amet!</p>
            </section>
            <section className="main__items">
                <div className="main__items__square">
                    <div className="main__items__square__icon main__items__square__icon--pink"><i className="far fa-meh"></i>
                    </div>
                    <span className="main__items__square__title">training Courses</span>
                    <div className="main__items__square__line"></div>
                    <p className="main__items__square__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Similique fugit dolore officia explicabo mollitia odit.</p>
                </div>
                <div className="main__items__square">
                    <div className="main__items__square__icon main__items__square__icon--green"><i
                            className="fas fa-check-double"></i>
                    </div>
                    <span className="main__items__square__title">2,769 online courses</span>
                    <div className="main__items__square__line"></div>
                    <p className="main__items__square__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Similique fugit dolore officia explicabo mollitia odit.</p>
                </div>
                <div className="main__items__square main__items__square--blue">
                    <div className="main__items__square__icon main__items__square__icon--white"><i
                            className="far fa-credit-card"></i></div>
                    <span className="main__items__square__title">training Courses</span>
                    <div className="main__items__square__line main__items__square__line--white"></div>
                    <p className="main__items__square__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Similique fugit dolore officia explicabo mollitia odit.</p>
                </div>
            </section>
        </main>
  );
}
