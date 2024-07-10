const portfolio = () => (
    <main className="main wrapper">
        <section className="main__portfolio">
            <h2 className="main__portfolio__title main-title">portfolio</h2>
            <div className="underline"></div>
            <div className="container">
                <div className=" main__portfolio__card">
                    <div className="card">
                        <img src="/gaming-small_640.jpeg" className="card-img-top" alt="Okładka gry Pro-X Football"/>
                        <div className="card-body">
                            <h5 className="card-title">Pro-X Football</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural to
                                additional
                                content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/marcedes-small_640.jpeg" className="card-img-top" alt="kładka gry Racing GT"/>
                        <div className="card-body">
                            <h5 className="card-title">Racing GT</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to
                                additional
                                content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default portfolio;
