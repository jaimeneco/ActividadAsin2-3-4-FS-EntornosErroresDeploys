import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const TriageWeb = () => {

    const backendURL = import.meta.env.VITE_BACKEND;

    const [opiniones, setOpiniones] = useState([])

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const obtenerOpiniones = async () => {
            try {
                const response = await fetch(`${backendURL}/api/v1/opinions`, {signal})
                console.log('respuesta del fetch de obtener opiniones', response)

                if (!response.ok) {
                    throw new Error('error al obtener los datos de opinions')
                }

                const data = await response.json()

                setOpiniones(data.data)
            } catch (e) {
                if (e.name === 'AbortError') {
                    // por si es un error causado por cancelar la solicitud del 
                    console.log('fetch ha sido cancelado por el abortcontroller', e)
                } else {
                    console.error('error en try de obtener opiniones', e)
                }
            }
        }

        obtenerOpiniones()

        //limpiar por si se desmonta el componente o se hace una nueva petición en el futuro
        return () => {
            controller.abort()
        };

    }, [])
    return (
        <div className="TriageWeb">
            <header className="TriageWeb-header">
                <div className='Header-div'>
                    <div className='Header-info'>
                        <img className='Header-logo' src="/img/hero.svg.png" alt="hero" />
                        <h1 style={{ color: "white" }}>Triage is first aid for your inbox.</h1>
                        <p style={{ color: "#ffffff9a", margin: "20px 0" }}>Everything you loved about the
                            original Triage is back – only better.
                            Download Triage 2 on the App Store
                            today.</p>
                        <img className='Header-btn' src="/img/download.svg.png" alt="Boton" />
                    </div>
                    <img className='ImgEmail-top' src="/img/hero.png.png" alt="App" />


                </div>

            </header>
            <section className='Feature Feature--dragLeft'>
                <div className='Header-div'>
                    <img className='ImgEmail-bottom' src="/img/archive.png.png" alt="email drag left" />

                    <div className='Feature-info'>
                        <img className='Feature-logo' src="/img/svg.png" alt="drag left" />
                        <h2 style={{ color: "white", margin: "20px 0" }}>Drag left to archive</h2>
                        <p style={{ color: "#ffffff9a" }}>Unread messages appear
                            in a stack of cards, like
                            this.</p>
                    </div>
                </div>


            </section>
            <section className='Feature Feature--dragRight'>
                <div className='Header-div'>
                    <div className='Feature-info'>
                        <img className='Feature-logo' src="/img/svg1.png" alt="keep email" />
                        <h2 style={{ color: "white", margin: "20px 0" }}>Drag right to keep
                        </h2>
                        <p style={{ color: "#ffffff9a" }}>Or create your own custom workflow.
                        </p>
                    </div>
                    <img className='ImgEmail-bottom' src="/img/keep.png.png" alt="keep" />
                </div>



            </section>
            <section className='Feature Feature--tap'>
                <div className='Header-div'>
                    <img className='ImgEmail-top' src="/img/expand.png.png" alt="expand email" />

                    <div className='Feature-info'>
                        <img className='Feature-logo' src="/img/Frame.png" alt="expand" />
                        <h2 style={{ margin: "20px 0" }}>Tap to expand</h2>
                        <p style={{ color: "#00000098" }}>Open the message to
                            view the whole thread.</p>
                    </div>
                </div>


            </section>
            <section className='Feature Feature--reply'>
                <div className='Header-div'>
                    <div className='Feature-info'>
                        <img className='Feature-logo' src="/img/Frame1.png" alt="reply img" />
                        <h2 style={{ color: "white", margin: "20px 0" }}>Reply in context

                        </h2>
                        <p style={{ color: "#ffffff9a" }}>Send a quick reply without leaving the
                            app.
                        </p>
                    </div>
                    <img className='ImgEmail-top' src="/img/reply.png.png" alt="reply email" />
                </div>



            </section>

            <section className='Info'>
                <div className='Info-container'>
                    <div className='Info-div work'>
                        <div >
                            <img className='Feature-logo' src="/img/svg2.png" alt="work img" />
                        </div>
                        <h3 className='Info-h3--white'>Works with Gmail,

                            iCloud & IMAP</h3>
                    </div>
                    <div className='Info-div processing'>
                        <div>
                            <img src="/img/svg5.png" alt="process img" />
                        </div>
                        <h3>All processing

                            happens on device
                        </h3>
                    </div>
                    <div className='Info-div data'>
                        <div>
                            <img className='Feature-logo' src="/img/svg3.png" alt="data img" />
                        </div>
                        <h3 className='Info-h3--white'>Your data is

                            yours to stay</h3>
                    </div>
                    <div className='Info-div dark'>
                        <div>
                            <img src="/img/Frame3.png" alt="support img" />
                        </div>
                        <h3 className='Info-h3--white'>Supports

                            dark mode</h3>
                    </div>
                    <div className='Info-div free'>
                        <div>
                            <img src="/img/svg4.png" alt="free to use img" />
                        </div>
                        <h3 className='Info-h3--white'>Free to use. Or pay

                            for more features.</h3>
                    </div>
                    <div className='Info-div build'>
                        <div>
                            <img src="/img/Frame4.png" alt="built img" />
                        </div>
                        <h3>Built & maintained

                            by indie developers</h3>
                    </div>
                </div>

            </section>

            <footer className='Footer'>

                <h2 className='Footer-h2'>Praise for Triage 1</h2>
                <div className='Footer-div'>

                    <div className='Feature-testimonials'>
                        <p>{opiniones[0]?.opinion}
                        </p>
                        <img src="/img/daring-fireball.png.png" alt="daring fireball img" />
                    </div>
                    <div className='Feature-testimonials'>
                        <p>{opiniones[1]?.opinion}</p>
                        <img src="/img/the-verge.svg.png" alt="the verge img" />
                    </div>
                    <div className='Feature-testimonials'>
                        <p>{opiniones[2]?.opinion}
                        </p>
                        <img src="/img/macworld.svg.png" alt="macworld img" />
                    </div>
                    <div className='Feature-testimonials'>
                        <p>{opiniones[3]?.opinion}
                        </p>
                        <img src="/img/maclife.png.png" alt="maclife img" />
                    </div>
                    <div className='Feature-testimonials'>
                        <p>{opiniones[4]?.opinion}</p>
                        <img src="/img/clean-email.png.png" alt="clean email img" />
                    </div>
                    <div className='Feature-testimonials'>
                        <p>{opiniones[5]?.opinion}</p>
                        <img src="/img/macstories.png.png" alt="macstories img" />
                    </div>
                </div>
                <nav className='Footer-nav'>
                    <div>
                        <Link className='Footer-link'>FAQ</Link>
                        <Link className='Footer-link'>Privacy</Link>
                        <Link className='Footer-link'>Terms</Link>
                        <Link className='Footer-link'>Security</Link>
                    </div>


                    <div className='Footer-rrss'>
                        <img className='Rrss-img' src="/img/svg5.png" alt="email" />
                        <img className='Rrss-img' src="/img/Frame5.png" alt="twitter" />
                    </div>
                </nav>



            </footer>
        </div>
    );
}

export default TriageWeb;