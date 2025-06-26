import service01 from "../assets/service01.svg"
import service02 from "../assets/service02.svg"
import service03 from "../assets/service03.svg"
import service04 from "../assets/service04.svg"

export default function Service() {
    const services = [
        { id: "service01", image: service01, title: "super quality food", description: "A team of dreamers and doers building unique interactive music and art" },
        { id: "service02", image: service02, title: "original recipes", description: "A team of dreamers and doers building unique interactive music and art" },
        { id: "service03", image: service03, title: "quick fast delivery", description: "A team of dreamers and doers building unique interactive music and art" },
        { id: "service04", image: service04, title: "100% fresh foods", description: "A team of dreamers and doers building unique interactive music and art" }
    ]

    return (
        <div className="container">
            <section className="service-section">
                <div className="service-row-grid">
                    {services.map((service) => (
                        <div className="service-row" key={service.id}>
                            <img src={service.image} />
                            <h3 className="heading03">{service.title}</h3>
                            <p className="para28">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}